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
Route::Apiresource('pedido', 'App\Http\Controllers\PedidoController');
Route::Apiresource('setor', 'App\Http\Controllers\SetorController');
Route::Apiresource('notas', 'App\Http\Controllers\NotasFiscaisController');
Route::Apiresource('itemestoque', 'App\Http\Controllers\ItemEstoqueController');
Route::Apiresource('manutencoes', 'App\Http\Controllers\ManutencoesController');
//Route::Apiresource('retirado', 'App\Http\Controllers\RetiradoController');
//Route::Apiresource('perfil', 'App\Http\Controllers\PerfilController');
//Route::Apiresource('estoque', 'App\Http\Controllers\EstoqueController');
//Route::Apiresource('retirado', 'App\Http\Controllers\RetiradoController');
