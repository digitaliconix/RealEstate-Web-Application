<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;
        foreach ($guards as $guard) {
            switch ($guard) {
                case 'client' :
                    if (Auth::guard($guard)->check()) {
                        return redirect()->route('client.dashboard');
                    }
                    break;
                case 'admin' :
                    if (Auth::guard($guard)->check()) {
                        return redirect()->route('admin.dashboard');
                    }
                    break;
                default:
                    if (Auth::guard($guard)->check()) {
                        return redirect()->route('home');
                    }
                    break;
            }
        }

        return $next($request);
    }
}
