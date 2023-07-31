<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemEstoque extends Model
{
    use HasFactory;
    protected $connection = 'mysql';
    protected $table = 'itens_estoque';

    protected $fillable = [
        'pedido_id',
        'item_id',
        'nota_id',
        'setor_id',
        'status',
        'patrimonio',
        'numeroSerie',
        'quantidade',
        'localizacao',
        'responsavel'
    ];

    public function rules()
    {
        return [
            'pedido_id' => 'exists:pedidos,id',
            'item_id' => 'exists:itens,id',
            'nota_id' => 'exists:nota_fiscais,id',
            'setor_id' => 'exists:setores,id',
            'status' => 'required',
            'localizacao' => 'required',
            'numeroSerie' => 'required'
        ];

        /*
            1) tabela
            2) nome da coluna que será pesquisada na tabela3
            3) id do registro que será desconsiderado na pesquisa
        */
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
        ];
    }

    public function pedido()
    {
        //UM ItemEstoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Pedido');
    }

    public function item()
    {
        //UM ItemEstoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Item');
    }


    public function nota()
    {
        //UM ItemEstoque PERTENCE a UM item
        return $this->belongsTo('App\Models\NotasFiscais');
    }

    public function setor()
    {
        //UM ItemEstoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Setor');
    }
}
