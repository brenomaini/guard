import React from "react";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";
import InputSelect from "../../../components/inputSelect";
import Input from "../../../components/inputText";

const categoryList = [
  {
    id: 1,
    name: "Notebook",
  },
  {
    id: 2,
    name: "Desktop",
  },
  {
    id: 3,
    name: "Headset",
  },
];
const statusList = [
  {
    id: 1,
    name: "Dell",
  },
  {
    id: 2,
    name: "ASUS",
  },
  {
    id: 3,
    name: "Logitech",
  },
  {
    id: 4,
    name: "Coisér",
  },
];
export default function Cadastroitem() {
  return (
    <div className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"ITEM "} />
      <div className="flex w-full justify-around h-96 items-center ">
        <Input name={"Nome"} />
        <InputSelect list={categoryList} type={"Categoria"} />
        <InputSelect list={statusList} type={"Marca"} />
      </div>
      <CadastroButton />
    </div>
  );
}
