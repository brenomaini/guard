import React from "react";
import { useForm } from "react-hook-form";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";

export default function CadastroMarca() {
  const { register, handleSubmit } = useForm();
  function cadastrar(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: `${data.nomeMarca}` }),
    };
    const baseURL = `http://127.0.0.1:8000/api/marca`;
    try {
      fetch(baseURL, options)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"MARCA"} />
      <div className="flex w-full justify-around h-96 items-center ">
        <label className="flex flex-col text-sm font-medium leading-6 text-black">
          Nome da nova marca
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="NomeMarca"
            placeholder="Digite aqui"
            {...register("nomeMarca")}
          />
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(cadastrar)} />
    </div>
  );
}
