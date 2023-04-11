import React from "react";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";
import Input from "../../../components/Inputs/inputText";

export default function CadastroCategoria() {
  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"CATEGORIA"} />
      <div className="flex w-full justify-around h-96 items-center ">
        <Input name={"Nome da nova categoria"} />
      </div>
      <CadastroButton />
    </div>
  );
}
