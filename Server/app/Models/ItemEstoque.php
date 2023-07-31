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
        'quantidade',
        'localizacao'
    ];
}
