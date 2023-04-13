<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerfilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('perfis')->insert([
            'nome' => 'Administrador',
            'cadastrar' => '0',
            'atualizar' => '0',
            'deletar' => '0',
            'vizualizar' => '0'
        ]);
    }
}
