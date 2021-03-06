<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/computers', 'ComputerController@index')->middleware('throttle:240,1');
Route::get('/customer/search', 'CustomerController@index');
Route::post('/computer/create', 'ComputerController@add');
Route::get('/attributions', 'AttributionController@index');
Route::post('/attributions/create', 'AttributionController@add');

