import React, { useState } from "react";
import Swal from "sweetalert2";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";
import InputSelectCategoria from "../../../components/Inputs/inputSelectCategoria";
import Input from "../../../components/Inputs/inputText";


import InputSelectMarca from "../../../components/Inputs/inputSelectMarca";

export default function Cadastroitem() {
  const [categoriaSelecionada, setCatSelecionada] = useState("");
  function checkCategory(categoriaInput) {
    console.log(categoriaInput);
    setCatSelecionada(categoriaInput.name);
  }
  function confirmarCadastro() {
    let estaVazio = true;
    // for (const info in item) {
    //   if (item[info] == "" && item[info] != 0) {
    //     estaVazio = `O campo ${info} não pode estar vazio`;
    //   }
    // }
    if (estaVazio === true) {
      // insereItemEstoque(item);
      Swal.fire({
        title: "Sucesso",
        text: "Cadastro realizado",
        icon: "success",
        confirmButtonColor: "#0D134C",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Atenção",
        text: `${estaVazio}`,
        icon: "warning",
        confirmButtonColor: "#DD303E",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"ITEM "} />
      <div className="flex  items-center justify-around h-1/2 w-full flex-wrap p-8 gap-8">
        <Input name={"Nome"} />
        <InputSelectCategoria checkCategory={checkCategory} />
        <InputSelectMarca />

        <label htmlFor="alertaQtd" className="flex flex-col items-center h-28">
          Alerta quantidade?
          <input type="checkbox" id="alertaQtd" className=" peer"></input>
          <div className="hidden peer-checked:block">
            <Input name={"Quantidade mínima"} />
          </div>
        </label>

        {(() => {
          if (
            categoriaSelecionada == "Notebook" ||
            categoriaSelecionada == "Desktop"
          ) {
            return (
              <>
                <div className="flex items-end">
                  <Input name={"Memória RAM"} />
                  GB
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex  items-end">
                    <Input name={"HD"} />
                    GB
                  </div>
                </div>
                <Input name={"GPU"} />
              </>
            );
          }
        })()}
      </div>
      <CadastroButton confirmarCadastro={confirmarCadastro} />
    </div>
  );
}
