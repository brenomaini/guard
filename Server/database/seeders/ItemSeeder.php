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
        $itens = [
            [
                'marca_id' => 1,
                'categoria_id' => 1,
                'nome' => 'Dell G15 Gamer',
                'descricao' => '12ª geração Intel® Core™ i5-12500H, Windows 11 Pro, NVIDIA® GeForce® RTX™ 3050, 4GB GDDR6, Full HD de 15.6" (1920 x 1080), 120Hz, Memória de 8GB DDR5 (1x8GB) 4800MHz; Expansível até 32GB (2 slots soDIMM), SSD de 256GB PCIe NVMe M.2',
                'patrimoniado' => 1,
                'link' => 'https://portal-interno.grancursosonline.com.br/a/tickets/filters/111111'
            ],
            [
                'marca_id' => 1,
                'categoria_id' => 2,
                'nome' => 'OptiPlex 3000 Micro',
                'descricao' => 'processador: 12ª geração intel core i3-12100t (4-core, 8-thread, cache de 12mb, 2.2ghz até 4.1ghz), sistema operacional: windows 11 home, placa de vídeo: intel uhd graphics 730, memória: memória de 8gb ddr4 (1x8gb) 3200mhz expansível até 32g (2 slots), armazenamento: ssd de 256gb pcie nvme, placa de video: intel uhd graphics 730',
                'patrimoniado' => 1,
                'link' => 'https://portal-interno.grancursosonline.com.br/a/tickets/filters/111111'
            ],
            [
                'marca_id' => 3,
                'categoria_id' => 3,
                'nome' => 'B660M Aorus PRO',
                'descricao' => 'Soquete LGA1700: Suporte para processadores Intel® Core™, Pentium® Gold e Celeron® de 12ª geração, Suporte para módulos de memória DDR4 5600(OC) / 5400(OC) / 5200(OC) /4800/4000 MHz, 4 x soquetes DDR DIMM que suportam até 128 GB (capacidade de DIMM único de 32 GB) de memória do sistema, Arquitetura de memória de canal duplo',
                'patrimoniado' => 0,
                'link' => 'https://portal-interno.grancursosonline.com.br/a/tickets/filters/111111'
            ],
            [
                'marca_id' => 4,
                'categoria_id' => 4,
                'nome' => 'Odyssey G5 34 VA',
                'descricao' => 'Monitor Gamer Samsung Odyssey G5 34 VA, Curvo, Wide, 165 Hz, 2K QHD, 1ms, FreeSync Premium, HDR10, HDMI/DisplayPort',
                'patrimoniado' => 1,
                'link' => 'https://portal-interno.grancursosonline.com.br/a/tickets/filters/111111'
            ],
            [
                'marca_id' => 5,
                'categoria_id' => 5,
                'nome' => 'Cloud Stinger',
                'descricao' => 'Entrada P2, P3, audio 7.1, uni-direcional',
                'patrimoniado' => 0,
                'link' => 'https://portal-interno.grancursosonline.com.br/a/tickets/filters/111111'
            ],
        ];

        DB::table('itens')->insert($itens);
    }
}
