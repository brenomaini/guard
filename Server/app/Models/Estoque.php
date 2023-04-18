<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque extends Model
{
    use HasFactory;
    protected $table = 'estoque';

    protected $fillable = [
        'item_id',
        'setor_id',
        'status_id',
        'quantidade',
        'agente',
        'notafiscal',
        'imgnota'
    ];
}
