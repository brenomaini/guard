<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::create('estoque', function (Blueprint $table) {
        //     $table->bigIncrements('id');
        //     $table->unsignedBigInteger('item_id');
        //     $table->unsignedBigInteger('setor_id');
        //     $table->unsignedBigInteger('status_id');
        //     $table->integer('quantidade');
        //     $table->string('localizacao', 10);
        //     $table->string('agente', 100);
        //     $table->string('notafiscal', 100)->nullable(); // número da nota fiscal
        //     $table->string('imgnota', 200)->nullable(); // nome da imagem armazenada
        //     //foreign key (constraints)
        //     $table->foreign('item_id')->references('id')->on('itens');
        //     $table->foreign('setor_id')->references('id')->on('setores');
        //     $table->foreign('status_id')->references('id')->on('status');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estoque');
    }
};
