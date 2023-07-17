<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNotasFiscaisRequest;
use App\Http\Requests\UpdateNotasFiscaisRequest;
use Illuminate\Http\Request;
use App\Repositories\NotasFiscaisRepository;
use App\Models\NotasFiscais;

class NotasFiscaisController extends Controller
{
    protected $notasFiscais;

    public function __construct(NotasFiscais $notasFiscais)
    {
        $this->notasFiscais = $notasFiscais;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $notasFiscaisRepository = new NotasFiscaisRepository($this->notasFiscais);

            // condição caso exista o atributo atributos_notas na url
            if ($request->has('atributos_notas')) {
                $atributos_notas = 'notas:id,' . $request->atributos_notas;
                $notasFiscaisRepository->selectAtributosRegistrosRelacionados($atributos_notas);
            } else {
                $notasFiscaisRepository->selectAtributosRegistrosRelacionados('item', 'pedido');
            }

            // condição caso exista o atributo atributos na url
            if ($request->has('all')) {
                return response()->json($notasFiscaisRepository->getResultado(), 200);
            } else {
                return response()->json($notasFiscaisRepository->getResultadoPaginado(10), 200);
            }
        } catch (\PDOException $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNotasFiscaisRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(NotasFiscais $notasFiscais)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NotasFiscais $notasFiscais)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNotasFiscaisRequest $request, NotasFiscais $notasFiscais)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NotasFiscais $notasFiscais)
    {
        //
    }
}
