<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class itemEstoque extends Model
{
    use HasFactory;
    protected $connection = 'mysql';
    protected $table = 'itens_estoque';

    protected $fillable = [
        'pedido_id',
        'item_id',
        'nota_id',
        'status',
        'patrimonio',
        'quantidade',
        'localizacao'
    ];

    public function rules()
    {
        return [
            'item_id' => 'exists:itens,id',
            'pedido_id' => 'exists:pedidos,id',
            'nota_id' => 'exists:nota_fiscais,id',
            'status' => 'required',
            'patrimonio' => 'required',
            'localização' => 'required'
        ];

        /*
            1) tabela
            2) nome da coluna que será pesquisada na tabela3
            3) id do registro que será desconsiderado na pesquisa
        */
    }
}
