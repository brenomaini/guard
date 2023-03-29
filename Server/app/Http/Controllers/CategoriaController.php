<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoriaRequest;
use App\Http\Requests\UpdateCategoriaRequest;
use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Repositories\CategoriaRepository;

class CategoriaController extends Controller
{
    protected $categoria;
    
    public function __construct(Categoria $categoria)
    {
        $this->categoria = $categoria;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categoriaRepository = new CategoriaRepository($this->categoria);

        return response()->json($categoriaRepository->getResultado(), 200);
        // // condição caso exista o atributo atributos na url
        // if ($request->has('all')) {
        //     return response()->json($categoriaRepository->getResultado(), 200);
        // } else {
        //     return response()->json($categoriaRepository->getResultadoPaginado(5), 200);
        // }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoriaRequest $request)
    {
         // validando campos de acordo com as regras do model
         $request->validate($this->categoria->rules(), $this->categoria->feedback());
         // salvando dados de categoria no banco
         $categoria = Categoria::create([
             'categoria' => $request->categoria
         ]);
         // retornando feedback de cadastro
         return response()->json($categoria, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return __FUNCTION__;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriaRequest $request, $id)
    {
        return __FUNCTION__;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return __FUNCTION__;
    }
}
