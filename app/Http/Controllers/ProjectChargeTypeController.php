<?php

namespace App\Http\Controllers;

use App\Models\ProjectChargeType;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectChargeTypeController extends Controller
{
    public function search()
    {
        $result = ProjectChargeType::when(request('project_id'), function ($q) {
            $q->where('project_id', request('project_id'));
        })->when(request('charge_type'), function ($q) {
            $q->where('charge_type_id', request('charge_type'));
        })->when(request('q'), function ($q) {
            $q->where('title', 'LIKE', "%" . request('q') . "%");
        })->whereHas('project', function ($q) {
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
        $result = ProjectChargeType::with('charge_type')
            ->when(request('project_id'), function ($q) {
                $q->where('project_id', request('project_id'));
            })->whereHas('project', function ($q) {
                $q->where('company_id', auth()->user()->company_id);
            })->orderBy('id', 'DESC')->paginate(request('per_page') ? request('per_page') : 25);

        return response()->json([
            'data' => $result
        ]);
    }

//    public function project_extra_charge_types_get($domain,$id){
//
//        $result = ProjectChargeType::where('project_id',$id)->get();
//
//        $form = [
//            "extra_charge_types" => $result
//        ];
//
//        return response()->json([
//            "form" => $form
//        ]);
//    }
//    public function project_extra_charge_types_store(Request $request,$domain,$id){
//
//        $request->validate([
//            'extra_charge_types' => 'array|min:1',
//            'extra_charge_types.*.title' => 'required'
//        ]);
//
//        $model = Project::findOrFail($id);
//
//        $model = DB::transaction(function () use ($model,$request) {
//            $model->updateHasMany([
//                'extra_charge_types' => $request->extra_charge_types
//            ]);
//
//            return $model;
//        });
//
//        $model->save();
//
//        return response()->json([
//            "saved" => true
//        ]);
//
//
//    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $form = [
            "title" => null,
            "project" => null,
            "project_id" => null
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
            'title' => 'required|max:255',
            'project_id' => 'required|numeric|exists:projects,id',
        ]);

        $model = new ProjectChargeType();

        $model->fill($request->all());
        $model->save();

        return response()->json([
            'saved' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ProjectChargeType $extraChargeType
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectChargeType $extraChargeType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\ProjectChargeType $extraChargeType
     * @return \Illuminate\Http\Response
     */
    public function edit($domain, $id)
    {
        $form = ProjectChargeType::with(['project'])->findOrFail($id);

        return response()->json([
            'form' => $form
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ProjectChargeType $extraChargeType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $domain, $id)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);

        $model = ProjectChargeType::findOrFail($id);

        $model->fill($request->all());
        $model->save();

        return response()->json([
            'saved' => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ProjectChargeType $extraChargeType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectChargeType $extraChargeType)
    {
        //
    }
}
