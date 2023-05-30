<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotaFiscal extends Model
{
    use HasFactory;
    protected $connection = 'mysql';

    protected $table = 'nota_fiscais';

    protected $fillable = [
        'item_id',
        'pedido_id',
        'nf',
        'file',
        'quantidade'
    ];

    public function rules() {
        return [
            'item_id' => 'exists:itens,id',
            'pedido_id' => 'exists:pedidos,id'
        ];

        /*
            1) tabela
            2) nome da coluna que será pesquisada na tabela3
            3) id do registro que será desconsiderado na pesquisa
        */
    }
}
