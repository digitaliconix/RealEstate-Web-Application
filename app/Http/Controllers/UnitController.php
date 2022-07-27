<?php

namespace App\Http\Controllers;

use App\Models\ProjectChargeType;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($domain,$id)
    {
        $result = Unit::with(['project', 'building', 'unit_type', 'measurement_type', 'unit_category'])
            ->where('project_id',$id)
            ->whereHas('project', function ($q) {
                $q->where('company_id', auth()->user()->company_id);
            })
            ->paginate(request('per_page') ? request('per_page') : 25);

        return response()->json([
            'data' => $result
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($domain,$id)
    {
        $standard_charges = ProjectChargeType::where('project_id',$id)->where('charge_type_id', 1)->get();

        $std_charge = [];
        foreach($standard_charges as $item){
            $data = [
                "project_charge_type" => $item,
                "project_charge_type_id" => $item->id,
                "price" => $item->price
            ];
            $std_charge[] = $data;
        }


        $form = [
            "number" => null,
            "project_id" => $id,
            "building" => null,
            "building_id" => null,
            "unit_type" => null,
            "unit_type_id" => null,
            "area" => null,
            "measurement_type" => null,
            "measurement_type_id" => null,
            "unit_price" => null,
            "unit_category" => null,
            "unit_category_id" => null,
            "standard_charges" => $std_charge,
            "extra_charges" => []
        ];

        return response()->json([
            "form" => $form
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'number' => 'required',
            'project_id' => 'required|numeric|exists:projects,id',
            'building_id' => 'nullable|numeric|exists:buildings,id',
            'unit_type_id' => 'required|numeric|exists:unit_types,id',
            'area' => 'required|numeric',
            'measurement_type_id' => 'required|numeric|exists:measurement_types,id',
            'unit_price' => 'required|numeric',
            'unit_category_id' => 'required|numeric|exists:unit_categories,id',
            'unit_image' => 'required|mimes:jpeg,jpg,png|max:4096',
            'standard_charges' => "array|nullable",
            'standard_charges.*.project_charge_type_id' => 'required|numeric|exists:project_charge_types,id',
            'standard_charges.*.price' => 'required|numeric|min:1',
            'extra_charges' => "array|nullable",
            'extra_charges.*.project_charge_type_id' => 'required|numeric|exists:project_charge_types,id',
            'extra_charges.*.price' => 'required|numeric|min:1',
        ]);

        $model = new Unit();
        $model->fill($request->except('standard_charges','extra_charges'));
        $unit_image = $request->file('unit_image');
        $unit_image_filename = time().$unit_image->getClientOriginalName();
        upload('local',$unit_image,'/public/project_'.$model->project_id.'/units/',$unit_image_filename);
        $model->image = $unit_image_filename;

        $extra_charges = collect($request->extra_charges)->sum(function ($item) {
            return $item['price'];
        });
        $standard_charges = collect($request->standard_charges)->sum(function ($item) {
            return $item['price'];
        });

        $model->total = $request->unit_price + $extra_charges + $standard_charges;

        $model = DB::transaction(function () use ($model, $request) {
            $model->storeHasMany([
                'standard_charges' => $request->standard_charges,
                'extra_charges' => $request->extra_charges
            ]);
            return $model;
        });

        $model->save();


        return response()->json([
            "saved" => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Unit $unit
     * @return \Illuminate\Http\Response
     */
    public function show(Unit $unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Unit $unit
     * @return \Illuminate\Http\Response
     */
    public function edit($domain, $id)
    {
        $form = Unit::with(['project', 'building', 'unit_type', 'measurement_type', 'unit_category', 'standard_charges.project_charge_type','extra_charges.project_charge_type'])->findOrFail($id);
        Arr::set($form,'old_unit_image',$form->image);
        return response()->json([
            "form" => $form
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Unit $unit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $domain, $id)
    {
        $request->validate([
            'number' => 'required',
            'project_id' => 'required|numeric|exists:projects,id',
            'building_id' => 'nullable|numeric|exists:buildings,id',
            'unit_type_id' => 'required|numeric|exists:unit_types,id',
            'area' => 'required|numeric',
            'measurement_type_id' => 'required|numeric|exists:measurement_types,id',
            'unit_price' => 'required|numeric',
            'unit_category_id' => 'required|numeric|exists:unit_categories,id',
            'standard_charges' => "array|nullable",
            'standard_charges.*.project_charge_type_id' => 'required|numeric|exists:project_charge_types,id',
            'standard_charges.*.price' => 'required|numeric|min:1',
            'extra_charges' => "array|nullable",
            'extra_charges.*.project_charge_type_id' => 'required|numeric|exists:project_charge_types,id',
            'extra_charges.*.price' => 'required|numeric|min:1',
        ]);

        $model = Unit::findOrFail($id);
        $model->fill($request->except('standard_charges','extra_charges'));

        if ($request->hasFile('unit_image')){
            $unit_image = $request->file('unit_image');
            $unit_image_filename = time().$unit_image->getClientOriginalName();
            upload('local',$unit_image,'/public/project_'.$model->project_id.'/units/',$unit_image_filename);
            deleteFile('local','/public/project_'.$model->project_id.'/units/',$request->old_unit_image);
            $model->image = $unit_image_filename;
        }

        $extra_charges = collect($request->extra_charges)->sum(function ($item) {
            return $item['price'];
        });
        $standard_charges = collect($request->standard_charges)->sum(function ($item) {
            return $item['price'];
        });

        $model->total = $request->unit_price + $extra_charges + $standard_charges;

        $model = DB::transaction(function () use ($model, $request) {
            $model->updateHasMany([
                'standard_charges' => $request->standard_charges,
                'extra_charges' => $request->extra_charges
            ]);
            return $model;
        });

        $model->save();

        return response()->json([
            "saved" => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Unit $unit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unit $unit)
    {
        //
    }
}
