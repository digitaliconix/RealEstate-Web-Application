<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{

    public function client_search(){
        $result = Project::where('company_id', auth()->user()->company_id)->when(request('q'), function($q){
            $q->where('title', 'like', '%'.request('q').'%');
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
        $result = Project::with(['city', 'country', 'project_type'])->where('company_id', auth()->user()->company_id)
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
    public function create()
    {
        $form = [
            'title' => null,
            'website' => null,
            'country_id' => null,
            'country' => null,
            'city_id' => null,
            'city' => null,
            'location' => null,
            'nearest_location' => null,
            'phone_number' => null,
            'land_space' => null,
            'company_id' => auth()->user()->company_id,
            'project_type_id' => null,
            'project_type' => null
        ];

        return response()->json([
            'form' => $form
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
            'website' => 'required|max:255',
            'country_id' => 'required|numeric|exists:countries,id',
            'city_id' => 'required|numeric|exists:cities,id',
            'location' => 'required',
            'nearest_location' => 'required',
            'phone_number' => 'required',
            'land_space' => 'required',
            'project_type_id' => 'required|numeric|exists:project_types,id',
        ]);

        DB::transaction(function() use($request) {
            $model = new Project();
            $model->fill($request->all());
            $model->save();
            if ($request->hasfile('project_images')) {
                $val = [];
                foreach ($request->file('project_images') as $image) {
                    $name = time() . $image->getClientOriginalName();
                    upload('local', $image, '/public/project_' . $model->id . '/', $name);
                    $data['path'] = $name;
                    $val[] = $data;
                }
                $model->storeHasMany([
                    'images' => $val
                ]);
            }
        });

        return response()->json([
            'saved' => true
        ]);


    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Project $companyProject
     * @return \Illuminate\Http\Response
     */
    public function show($domain, $id)
    {
        $model = Project::with(['country', 'city', 'project_type', 'images'])->findOrFail($id);

        return response()->json([
            'model' => $model
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Project $companyProject
     * @return \Illuminate\Http\Response
     */
    public function edit($domain, $id)
    {
        $form = Project::with(['country', 'city', 'project_type', 'images'])->findOrFail($id);

        return response()->json([
            'form' => $form
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Project $companyProject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $domain, $id)
    {
        $request->validate([
            'title' => 'required|max:255',
            'website' => 'required|max:255',
            'country_id' => 'required|numeric|exists:countries,id',
            'city_id' => 'required|numeric|exists:cities,id',
            'location' => 'required',
            'nearest_location' => 'required',
            'phone_number' => 'required',
            'land_space' => 'required',
            'project_type_id' => 'required|numeric|exists:project_types,id',
        ]);

        DB::transaction(function() use ($request, $id){
            $model = Project::findOrFail($id);
            $model->fill($request->all());
            $model->save();
            if ($request->hasfile('project_images')) {
                $val = [];
                foreach ($request->file('project_images') as $image) {
                    $name = time() . $image->getClientOriginalName();
                    upload('local', $image, '/public/project_' . $id . '/', $name);
                    $data['path'] = $name;
                    $val[] = $data;
                }
                $model->storeHasMany([
                    'images' => $val
                ]);
            }
        });

        return response()->json([
            'saved' => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Project $companyProject
     * @return \Illuminate\Http\Response
     */
    public function destroy($domain, $id)
    {
        //
    }


    public function delete_image($domain,$id){
        $model = ProjectImage::findOrFail($id);
        deleteFile('local','/public/project_'.$model->project_id.'/',$model->path);
        $model->delete();
        return response()->json(['saved'=>true]);
    }
}
