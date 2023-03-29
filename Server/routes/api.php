<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::Apiresource('categoria', 'App\Http\Controllers\CategoriaController');
Route::Apiresource('marca', 'App\Http\Controllers\MarcaController');
Route::Apiresource('status', 'App\Http\Controllers\StatusController');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
