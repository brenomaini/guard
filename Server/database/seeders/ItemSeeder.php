<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('itens')->insert([
            'marca_id' => '1',
            'categoria_id' => '1',
            'nome' => 'Dell G15 Gamer',
            'descricao' => '12ª geração Intel® Core™ i5-12500H, Windows 11 Pro, NVIDIA® GeForce® RTX™ 3050, 4GB GDDR6, Full HD de 15.6" (1920 x 1080), 120Hz, Memória de 8GB DDR5 (1x8GB) 4800MHz; Expansível até 32GB (2 slots soDIMM), SSD de 256GB PCIe NVMe M.2'
        ]);
    }
}
