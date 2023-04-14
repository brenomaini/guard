<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SetorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('setores')->insert([
            'nome' => 'Audiovisual & Broadcast',
            'centro_de_custo' => '524833AB'
        ]);
    }
}
