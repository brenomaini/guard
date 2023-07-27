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

            // filtro multiplo
            if ($request->has('filtro')) {
                $notasFiscaisRepository->filtro($request->filtro);
            }

            // condição caso exista o atributo atributos na url
            if ($request->has('atributos')) {
                $notasFiscaisRepository->selectAtributos($request->atributos);
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
     * Display the specified resource.
     */
    public function show($id)
    {

        $notasFiscais = $this->notasFiscais->find($id);

        if ($notasFiscais === null) {
            return response()->json(['erro' => 'Nota pesquisado não existe no banco.'], 404);
        }

        return response()->json($notasFiscais, 200);
    }
}
