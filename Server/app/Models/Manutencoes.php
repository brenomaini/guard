<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manutencoes extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    protected $table = 'manutencoes';
    protected $fillable = [
        'itens_estoque_id',
        'descricao'
    ];

    public function item_estoque()
    {
        //UMA manutenção PERTENCE a UM itemEstoque
        return $this->belongsTo('App\Models\ItemEstoque');
    }
}
