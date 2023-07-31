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
        'localizacao'
    ];

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
