<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\UnitType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UnitTypeController extends Controller
{
    public function search()
    {
        $result = UnitType::with('measurement_type')->when(request('project_id'),function($q){
            $q->where('project_id', request('project_id'));
        })->when(request('q'),function($q){
            $q->where('title','LIKE', "%".request('q')."%");
        })->whereHas('project', function($q){
            $q->where('company_id', auth()->user()->company_id);
        })->limit(6)->get();

        return response()->json([
            'data' => $result
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = UnitType::with(['project','measurement_type'])
            ->when(request('project_id'), function($q){
                $q->where('project_id', request('project_id'));
            })->whereHas('project', function($q){
                $q->where('company_id', auth()->user()->company_id);
            })->paginate(request('per_page') ? request('per_page') : 25);

        return response()->json([
            'data' => $result
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'base_price' => 'required|numeric|min:1000',
            'area' => 'required|numeric|min:1',
            'measurement_type_id' => 'required|numeric|exists:measurement_types,id',
            "description" => "nullable"
        ]);

        $model = new UnitType();
        $model->fill($request->all());

        $model->save();

        return response()->json([
            "saved" => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UnitType  $unitType
     * @return \Illuminate\Http\Response
     */
    public function show(UnitType $unitType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UnitType  $unitType
     * @return \Illuminate\Http\Response
     */
    public function edit(UnitType $unitType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UnitType  $unitType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $domain, $id)
    {
        $request->validate([
            'title' => 'required',
            'base_price' => 'required|numeric|min:1000',
            'area' => 'required|numeric|min:1',
            'measurement_type_id' => 'required|numeric|exists:measurement_types,id',
            "description" => "nullable"
        ]);

        $model = UnitType::findOrFail($id);
        $model->fill($request->all());

        $model->save();

        return response()->json([
            "saved" => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UnitType  $unitType
     * @return \Illuminate\Http\Response
     */
    public function destroy(UnitType $unitType)
    {
        //
    }
}
