<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_id',
        'setor_id',
        'status',
        'agente',
        'aprovador',
        'quantidade',
        'solicitante',
        'qtdNotas',
        'data_update',
        'qtdRetirados',
        'numero_ticket_freshdesk',
        'motivo',
        'enable' => 'boolean'
    ];

    public function rules()
    {
        return [
            'item_id' => 'exists:itens,id',
            'setor_id' => 'exists:setores,id',
            'status' => 'required',
            'agente' => 'required',
            'aprovador' => 'required',
            'quantidade' => 'required',
            'solicitante' => 'required'
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
            'required' => 'O campo :attribute é obrigatório'
        ];
    }

    public function item()
    {
        //UM pedido PERTENCE a UM item
        return $this->belongsTo('App\Models\Item');
    }

    public function setor()
    {
        //UM pedido PERTENCE a UM setor
        return $this->belongsTo('App\Models\Setor');
    }

    public function notas()
    {
        //UMA marca POSSUI MUITOS itens
        return $this->hasMany('App\Models\NotasFiscais');
    }
}
