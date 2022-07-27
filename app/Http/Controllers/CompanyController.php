<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Company;
use Database\Seeders\ClientUser;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Company::paginate(request('per_page') ? request('per_page') : 25);

        return response()->json(['data' => $result]);
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
            'domain' => null,
            'user' => [
                'name' => null,
                'email' => null,
                'password' => null,
                'password_confirmation' => null,
                'company_id' => null
            ],
            'base_domain' => '.'. env('APP_BASE_URL')
        ];

        return response()->json([
            'form' => $form
        ]);

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
            'domain' => 'required|unique:companies,domain',
            'user.name' => 'required',
            'user.email' => ['required', 'string', 'email', 'max:255', 'unique:client_users,email'],
            'user.password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user_data = $request->user;

        $company = new Company();
        $company->fill($request->except('user'));
        $company->save();

        $user_data['company_id'] = $company->id;

        $user = Client::create($user_data);

        $user->syncRoles(['Admin']);

        return response()->json([
            "saved" => true
        ]);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
