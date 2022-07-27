<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\ApplicationController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::domain('{domain}.'.env('APP_BASE_URL'))->group(function () {
    Route::group(['namespace' => 'Client', 'middleware' => ['verify_domain']], function () {
        Auth::routes(['verify' => true]);
    });

    Route::group([
        'namespace' => 'Client\Auth', 'middleware' => ['verify_domain']
    ], function () {
        Route::get('login', 'LoginController@showLoginForm')->name('login_page');
        Route::get('register', 'RegisterController@showRegistrationForm')->name('register_page');
        Route::post('login', 'LoginController@login')->name('login');
        Route::post('register', 'RegisterController@register')->name('register');
        Route::get('logout', 'LoginController@logout')->name('logout');
    });

    Route::group([
        'middleware' => [
            'verify_domain',
            'auth:client',
//        'verified:client.verification.notice',
        ],
    ], function () {
        Route::group(['prefix' => 'api'], function () {
            Route::resource('projects', ProjectController::class);
            Route::resource('buildings', BuildingController::class);
            Route::resource('unit_types', UnitTypeController::class);
            Route::resource('project_charge_types', ProjectChargeTypeController::class);
            Route::get('project/{id}/units/create', [ \App\Http\Controllers\UnitController::class, 'create']);
            Route::get('project/units/{id}/edit', [ \App\Http\Controllers\UnitController::class, 'edit']);
            Route::get('project/{id}/units', [ \App\Http\Controllers\UnitController::class, 'index']);
            Route::post('units', [\App\Http\Controllers\UnitController::class , 'store']);
            Route::put('units/{id}', [\App\Http\Controllers\UnitController::class , 'update']);
            Route::get('menus', [\App\Http\Controllers\MenuController::class, 'index']);
            Route::get('/attachment/{folder}/{file_name}',[\App\Http\Controllers\AttachmentController::class,'showProjectAttachment']);
            Route::get('/attachment/{base_folder}/{folder}/{file_name}',[\App\Http\Controllers\AttachmentController::class,'showProjectUnitAttachment']);
            Route::get('/delete_project_image/{id}', [\App\Http\Controllers\ProjectController::class,'delete_image']);
            Route::group(['prefix' => 'search'], function(){
               Route::get('countries', [\App\Http\Controllers\CountryController::class, 'search']);
                Route::get('cities', [\App\Http\Controllers\CityController::class, 'search']);
                Route::get('projects', [\App\Http\Controllers\ProjectController::class, 'client_search']);
                Route::get('project_types', [\App\Http\Controllers\ProjectTypeController::class, 'search']);
                Route::get('charge_types', [\App\Http\Controllers\ChargeTypeController::class, 'search']);
                Route::get('measurement_types', [\App\Http\Controllers\MeasurementTypeController::class, 'search']);
                Route::get('unit_categories', [\App\Http\Controllers\UnitCategoryController::class, 'search']);
                Route::get('buildings', [\App\Http\Controllers\BuildingController::class, 'search']);
                Route::get('project_charge_types', [\App\Http\Controllers\ProjectChargeTypeController::class, 'search']);
                Route::get('unit_types', [\App\Http\Controllers\UnitTypeController::class, 'search']);
            });
        });
        Route::namespace('Client')->group(function () {
            Route::get('{vue?}', [ApplicationController::class, 'index'])->where('vue', '[\/\w\.-]*')->name('dashboard');
        });
    });
});
