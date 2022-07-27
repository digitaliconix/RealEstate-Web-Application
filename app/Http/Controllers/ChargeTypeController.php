<?php

namespace App\Http\Controllers;

use App\Models\ChargeType;
use Illuminate\Http\Request;

class ChargeTypeController extends Controller
{
    public function search()
    {
        $result = ChargeType::when(request('q'), function($q){
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
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ChargeType  $chargeType
     * @return \Illuminate\Http\Response
     */
    public function show(ChargeType $chargeType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ChargeType  $chargeType
     * @return \Illuminate\Http\Response
     */
    public function edit(ChargeType $chargeType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ChargeType  $chargeType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChargeType $chargeType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ChargeType  $chargeType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChargeType $chargeType)
    {
        //
    }
}
