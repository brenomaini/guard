import React, { useState } from "react";
import Swal from "sweetalert2";
import InputSelectSetor from "../../../components/Inputs/inputSelectSetor";
import Input from "../../../components/Inputs/inputText";
import Header from "../../../components/headerGranLover";

export default function admissao() {
  const [inputs, setInputs] = useState({
    email: "",
    setor: "",
    aprovador: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setInputs({
      ...inputs,
      [event.target.name]: value,
    });
  }
  function desvincular() {
    let estaVazio = true;

    if (inputs.email == "") {
      estaVazio = `O campo e-mail não pode estar vazio`;
    }

    if (estaVazio === true) {
      Swal.fire({
        title: "Você tem certeza?",
        text: "Não será possível reverter essa alteração!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0D134C",
        cancelButtonColor: "#DD303E",
        confirmButtonText: "Sim, vincular itens!",
        cancelButtonText: "Não, cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmado",
            text: "Itens vinculados",
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        }
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
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
        <Header name="Admissão" />
      </div>
      {/*body*/}

      <p className="my-4 text-slate-500 text-lg leading-relaxed flex justify-center">
        Insira o e-mail do colaborador admitido.
      </p>
      <div className="flex w-full justify-around flex-wrap h-96 items-center ">
        <Input
          name={"E-mail do novo GranLover"}
          onChange={handleChange}
          value={inputs.email}
          htmlName={"email"}
        />
        <InputSelectSetor />
        <Input
          name={"E-mail do GranLover aprovador"}
          onChange={handleChange}
          value={inputs.aprovador}
          htmlName={"emailAprovador"}
        />
      </div>

      {/*footer*/}
      <div className="flex items-center justify-around p-4 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-white bg-gran-blue bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
          type="button"
          onClick={() => {
            desvincular();
          }}
        >
          Vincular itens
        </button>
      </div>
    </div>
  );
}
