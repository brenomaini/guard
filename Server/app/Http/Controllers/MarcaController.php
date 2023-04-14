<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMarcaRequest;
use App\Http\Requests\UpdateMarcaRequest;
use App\Models\Marca;
use Illuminate\Http\Request;
use App\Repositories\MarcaRepository;

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

        // condição caso exista o atributo atributos_marca na url
        if ($request->has('atributos_itens')) {
            $atributos_itens = 'itens:id,'.$request->atributos_itens;
            $marcaRepository->selectAtributosRegistrosRelacionados($atributos_itens);
        } else {
            $marcaRepository->selectAtributosRegistrosRelacionados('itens');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $marcaRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $marcaRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($marcaRepository->getResultado(), 200);
        } else {
            return response()->json($marcaRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMarcaRequest $request)
    {
        $request->validate($this->marca->rules(), $this->marca->feedback());
        $marca = Marca::create([
            'nome' => $request->nome
        ]);

        return response()->json($marca, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $marca = $this->marca->find($id);

        if($marca === null) {
            return response()->json(['erro' => 'Marca pesquisada não existe'], 404);
        }
        return response()->json($marca, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMarcaRequest $request, $id)
    {
        $marca = $this->marca->find($id);

        if($marca === null) {
            return response()->json(['erro' => 'Erro na atualização, marca não existe.'], 404);
        }

        if($request->method() === 'patch') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach($marca->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if(array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $marca->feedback());
        } else {
            $request->validate($marca->rules(), $marca->feedback());
        }

        $marca->fill($request->all());
        $marca->save();
        return response()->json($marca, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $marca = $this->marca->find($id);

        try {
            if($marca === null)
            {
                return response()->json(['msg' => 'Erro ao deletar, marca não existe em nosso banco.'], 404);
            }
            
            $marca->delete();

            return response()->json(['msg' => 'Marca removida com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: '.$e->getMessage()], 500);
        }
    }
}
