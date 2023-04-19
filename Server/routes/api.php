<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

// Route::controller(AuthController::class)->group(function () {
//     Route::post('login', 'login');
//     Route::post('register', 'register');
//     Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
// });

Route::Apiresource('marca', 'App\Http\Controllers\MarcaController');
Route::Apiresource('categoria', 'App\Http\Controllers\CategoriaController');
Route::Apiresource('item', 'App\Http\Controllers\ItemController');
Route::Apiresource('perfil', 'App\Http\Controllers\PerfilController');
Route::Apiresource('setor', 'App\Http\Controllers\SetorController');
Route::Apiresource('status', 'App\Http\Controllers\StatusController');
Route::Apiresource('estoque', 'App\Http\Controllers\EstoqueController');
