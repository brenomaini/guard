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
        Schema::create('itens_estoque', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pedido_id');
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('nota_id');
            $table->unsignedBigInteger('setor_id');
            $table->string('status', 50);
            $table->string('patrimonio', 50)->nullable();
            $table->integer('quantidade')->default('1')->nullable();
            $table->string('localizacao', 10);
            $table->timestamps();
            //foreign key (constraints)
            $table->foreign('pedido_id')->references('id')->on('pedidos');
            $table->foreign('item_id')->references('id')->on('itens');
            $table->foreign('nota_id')->references('id')->on('nota_fiscais');
            $table->foreign('setor_id')->references('id')->on('setores');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('itens_estoque');
    }
};
