<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Item;
use Illuminate\Http\Request;
use App\Repositories\ItemRepository;

class ItemController extends Controller
{
    protected $item;
    
    public function __construct(Item $item)
    {
        $this->item = $item;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $itemRepository = new ItemRepository($this->item);

        // condição caso exista o atributo atributos_modelo na url
        if ($request->has('atributos_marca')) {
            $atributos_marca = 'marca:id,' . $request->atributos_marca;
            $itemRepository->selectAtributosRegistrosRelacionados($atributos_marca);
        } else {
            $itemRepository->selectAtributosRegistrosRelacionados('marca', 'categoria');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $itemRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $itemRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($itemRepository->getResultado(), 200);
        } else {
            return response()->json($itemRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        $request->validate($this->item->rules(), $this->item->feedback());
        $item = Item::create([
            'marca_id' => $request->marca_id,
            'categoria_id' => $request->categoria_id,
            'nome' => $request->nome,
            'descricao' => $request->descricao,
            'alerta_quantidade' => $request->alerta_quantidade,
            'alerta_valor' => $request->alerta_valor
        ]);

        return response()->json($item, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $item = $this->item->find($id);

        if($item === null) {
            return response()->json(['erro' => 'Item pesquisado não existe no banco.'], 404);
        }
        return response()->json($item, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, $id)
    {
        $item = $this->item->find($id);

        if($item === null) {
            return response()->json(['erro' => 'Erro na atualização, item não existe no banco.'], 404);
        }

        if($request->method() === 'PATCH') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach($item->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if(array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $item->feedback());
        } else {
            $request->validate($item->rules(), $item->feedback());
        }

        $item->fill($request->all());
        $item->save();
        return response()->json($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = $this->item->find($id);

        try {
            if($item === null)
            {
                return response()->json(['msg' => 'Erro ao deletar, item não existe em nosso banco.'], 404);
            }
            
            $item->delete();

            return response()->json(['msg' => 'Item removido com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: '.$e->getMessage()], 500);
        }
    }
}
