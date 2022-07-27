<?php

namespace App\Http\Controllers\Client\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:client')->except('logout');
    }

    protected function credentials(Request $request)
    {
        $company = Company::where('domain', $request->domain)->first();
        $credentials = $request->only($this->username(), 'password');
        $credentials['company_id'] = $company->id;

        return $credentials;

    }

    public function showLoginForm()
    {
        $domain = Route::input('domain');
        return view('backend.client.auth.login', compact('domain'));
    }

    protected function guard(){

        return Auth::guard('client');
    }

    public function logout()
    {
        Auth::guard('client')->logout();
        $domain = Route::input('domain');
        return redirect()->route('client.login_page', ['domain' => $domain]);
    }
}
