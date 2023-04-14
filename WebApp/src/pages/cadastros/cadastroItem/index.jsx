import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import InputSelectCategoria from "../../../components/Inputs/inputSelectCategoria";
import CadastroButton from "../../../components/cadastroButton";
import HeaderCadastroItem from "../../../components/headerCadastroItem";

import InputSelectMarca from "../../../components/Inputs/inputSelectMarca";

export default function Cadastroitem() {
  const insereItemSchema = z.object({
    nomeItem: z.string().nonempty("Nome do item é obrigatório"),
    categoria: z.string().nonempty("Categoria é obrigatório"),
    marca: z.string().nonempty("Marca é obrigatório"),
    descricao: z.string(),
    alerta: z.boolean(),
    alertaQtd: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insereItemSchema),
  });

  const [item, setitem] = useState({
    data: "Automatico via sistema",
    agente: "Automatico Via sistema",
  });

  function confirmarCadastro() {
    // insereItemEstoque(item);
    Swal.fire({
      title: "Sucesso",
      text: "Cadastro realizado",
      icon: "success",
      confirmButtonColor: "#0D134C",
      confirmButtonText: "OK",
    });
  }

  return (
    <form className="flex flex-col h-screen items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"ITEM "} />
      <div className="flex flex-col items-center justify-around h-1/2 w-full flex-wrap p-8 gap-8">
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Nome do item
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            type="text"
            id="NomeItem"
            placeholder="Nome do item"
            {...register("nomeItem")}
          />
          {errors.nomeItem && (
            <span className="text-gran-red opacity-90">
              {errors.nomeItem.message}
            </span>
          )}
        </label>

        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Categoria
          <select
            {...register("categoria")}
            className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
          >
            <InputSelectCategoria />
          </select>
          {errors.categoria && (
            <span className="text-gran-red opacity-90">
              {errors.categoria.message}
            </span>
          )}
        </label>
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Marca
          <select
            {...register("marca")}
            className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
          >
            <InputSelectMarca />
          </select>
          {errors.marca && (
            <span className="text-gran-red opacity-90">
              {errors.marca.message}
            </span>
          )}
        </label>
        <label
          htmlFor="descricao"
          className="flex flex-col  text-sm font-medium leading-6 text-black items-center h-36"
        >
          Descrição
          <textarea
            id="descricao"
            cols="30"
            rows="10"
            placeholder="Memória,hd,infos extras"
            className="cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
            {...register("descricao")}
          ></textarea>
        </label>
        <label
          htmlFor="alerta"
          className="flex flex-col items-center h-28   text-sm font-medium leading-6 text-black"
        >
          Alerta quantidade?
          <input
            {...register("alerta")}
            type="checkbox"
            id="alerta"
            className=" peer"
            onClick={(e) =>
              //aqui vai setar que PRECISA de alertar a quantidade
              console.log(e)
            }
          />
          <div className="hidden peer-checked:block">
            <label className="flex flex-col w-72 text-sm font-medium leading-6 text-black">
              Quantidade
              <input
                className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                type="number"
                id="nf"
                placeholder="00"
                {...register("alertaQtd")}
              />
            </label>
          </div>
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(confirmarCadastro)} />
    </form>
  );
}
