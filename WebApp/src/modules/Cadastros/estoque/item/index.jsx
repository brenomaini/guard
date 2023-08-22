import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import InputSelectCategoria from "../../../../components/Inputs/inputSelectCategoria";
import InputSelectMarca from "../../../../components/Inputs/inputSelectMarca";
import CadastroButton from "../../../../components/cadastroButton";
import HeaderCadastroItem from "../components/headerCadastroItem";

export default function Cadastroitem() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const insereItemSchema = z.object({
    nome: z.string().nonempty("Nome é obrigatório"),
    categoria: z.string().nonempty("Categoria é obrigatório"),
    marca: z.string().nonempty("Marca é obrigatório"),
    link: z.string().nonempty("Link de compra do item é obrigatório"),
    descricao: z.string(),
    patrimoniado: z.boolean(),
  });
  const {
    register,
    handleSubmit,
    resetField,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(insereItemSchema),
  });

  function confirmarCadastro(data) {
    let marcaid = data.marca.split("!");
    let categoriaid = data.categoria.split("!");
    let valDescricao = "Item sem descrição";
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    const form = new FormData();

    form.append("marca_id", parseInt(marcaid[1]));
    form.append("categoria_id", parseInt(categoriaid[1]));
    form.append("nome", data.nome);
    form.append("descricao", valDescricao);
    form.append("link", data.link);
    form.append("patrimoniado", data.patrimoniado ? 1 : 0);
    form.append("alerta_quantidade", "0");
    form.append("data_update", novaData);

    const options = {
      method: "POST",

      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });

    const url = `${baseURL}/item`;

    fetch(url, options).then((response) => {
      if (response.ok) {
        resetField("nome");
        resetField("categoria");
        resetField("marca");
        resetField("patrimoniado");
        resetField("link");
        resetField("descricao");

        Swal.fire({
          title: "Sucesso",
          text: `Item ${data.nome} cadastrado.`,
          icon: "success",
          confirmButtonColor: "#0D134C",
          confirmButtonText: "OK",
        });
      } else {
        console.log(response.json());
      }
    });
  }

  return (
    <form className="flex flex-col h-full items-center  bg-black bg-opacity-25 m-4">
      <HeaderCadastroItem name={"ITEM "} />
      <div className="flex flex-col items-center justify-around h-1/2 w-full flex-wrap p-8 gap-8">
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Nome do item
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
            type="text"
            id="nome"
            placeholder="Nome do item"
            {...register("nome")}
          />
          {errors.nome && (
            <span className="text-guard-red opacity-90">
              {errors.nome.message}
            </span>
          )}
        </label>

        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Categoria
          <select
            {...register("categoria")}
            className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
          >
            <InputSelectCategoria />
          </select>
          {errors.categoria && (
            <span className="text-guard-red opacity-90">
              {errors.categoria.message}
            </span>
          )}
          <a
            href="/cadastroCategoria"
            target="_blank"
            className="text-guard-green opacity-90 text-xs hover:font-bold"
          >
            Cadastrar nova categoria
          </a>
        </label>
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Marca
          <select
            {...register("marca")}
            className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
          >
            <InputSelectMarca />
          </select>
          {errors.marca && (
            <span className="text-guard-red opacity-90">
              {errors.marca.message}
            </span>
          )}
          <a
            href="/cadastroMarca"
            target="_blank"
            className="text-guard-green opacity-90 text-xs hover:font-bold "
          >
            Cadastrar nova marca
          </a>
        </label>
        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
          Link de compra
          <input
            className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
            type="text"
            id="link"
            placeholder="https://site.com"
            {...register("link")}
          />
          {errors.link && (
            <span className="text-guard-red opacity-90">
              {errors.link.message}
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
            className="cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
            {...register("descricao")}
          ></textarea>
        </label>
        <label
          htmlFor="patrimoniado"
          className="flex flex-col items-center h-28   text-sm font-medium leading-6 text-black"
        >
          Este item requer patrimoniamento?
          <input
            {...register("patrimoniado")}
            type="checkbox"
            id="patrimoniado"
            className=" peer"
          />
          <div className="hidden peer-checked:block">Sim</div>
        </label>
      </div>
      <CadastroButton confirmarCadastro={handleSubmit(confirmarCadastro)} />
    </form>
  );
}
