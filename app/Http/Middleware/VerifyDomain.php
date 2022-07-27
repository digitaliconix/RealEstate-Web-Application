<?php

namespace App\Http\Middleware;

use App\Models\Company;
use Closure;
use Illuminate\Http\Request;

class VerifyDomain
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $domain = $request->domain;
        $company = Company::where('domain',$domain)->where('status', 1)->first();
        if($company != null){
            return $next($request);
        }else{
            return redirect()->to(env('APP_URL').'/not-registered');
        }
    }
}
