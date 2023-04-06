import React from "react";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";
import Input from "../../../components/inputs/inputText";

export default function CadastroMarca() {
  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"MARCA"} />
      <div className="flex w-full justify-around h-96 items-center ">
        <Input name={"Nome da nova marca"} />
      </div>
      <CadastroButton />
    </div>
  );
}
