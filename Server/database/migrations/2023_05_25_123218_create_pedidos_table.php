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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('setor_id');
            $table->string('status', 50);
            $table->string('agente', 100);
            $table->string('aprovador', 100);
            $table->integer('quantidade');
            $table->string('solicitante', 100);
            $table->timestamps();
            //foreign key (constraints)
            $table->foreign('item_id')->references('id')->on('itens');
            $table->foreign('setor_id')->references('id')->on('setores');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
