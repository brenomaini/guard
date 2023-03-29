<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMarcaRequest;
use App\Http\Requests\UpdateMarcaRequest;
use App\Models\Marca;
use App\Repositories\MarcaRepository;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    protected $marca;
    
    public function __construct(Marca $marca)
    {
        $this->marca = $marca;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $marcaRepository = new MarcaRepository($this->marca);

        return response()->json($marcaRepository->getResultado(), 200);
        // // condição caso exista o atributo atributos na url
        // if ($request->has('all')) {
        //     return response()->json($marcaRepository->getResultado(), 200);
        // } else {
        //     return response()->json($marcaRepository->getResultadoPaginado(5), 200);
        // }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMarcaRequest $request)
    {
        // validando campos de acordo com as regras do model
        $request->validate($this->marca->rules(), $this->marca->feedback());
        // salvando dados de marca no banco
        $marca = Marca::create([
            'nome' => $request->nome
        ]);
        // retornando feedback de cadastro
        return response()->json($marca, 201);
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
    public function update(UpdateMarcaRequest $request, $id)
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
