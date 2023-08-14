import { FunnelIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputSelectItem from "../../../../../components/inputs/inputSelectItem";
import InputSelectSetor from "../../../../../components/inputs/inputSelectSetor";
import InputSelectStatus from "./InputSelectStatus";

function Filtro({ setFiltro }) {
  function pesquisar(data) {
    setFiltro([""]);
    //CORRIGIR O SET pois esta concatenando undefined
    if (data.item != "") {
      const item = data.item.split("!");
      const itemID = item[1];
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "item_id", valorProc: itemID }]
          : [{ campo: "item_id", valorProc: itemID }]
      );
      //Colocar mais um inputSelectItem pra pegar o ID do item e enviar.
    }
    if (data.setor != "") {
      const setor = data.setor.split("!");
      const setorID = setor[1];
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "setor_id", valorProc: setorID }]
          : [{ campo: "setor_id", valorProc: setorID }]
      );
      //Colocar mais um inputSelectItem pra pegar o ID do item e enviar.
    }
    if (data.status != "") {
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "status", valorProc: data?.status }]
          : [{ campo: "status", valorProc: data?.status }]
      );
    }
    if (data.patrimonio != "") {
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "patrimonio", valorProc: data?.patrimonio }]
          : [{ campo: "patrimonio", valorProc: data?.patrimonio }]
      );
    }
    if (data.nSerie != "") {
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "numeroSerie", valorProc: data?.nSerie }]
          : [{ campo: "numeroSerie", valorProc: data?.nSerie }]
      );
    }
    if (data.responsavel != "") {
      setFiltro((old) =>
        old != ""
          ? [...old, { campo: "responsavel", valorProc: data?.responsavel }]
          : [{ campo: "responsavel", valorProc: data?.responsavel }]
      );
    }
  }

  const filtroPedidoSchema = z.object({
    item: z.string().optional(),
    setor: z.string().optional(),
    nSerie: z.string().optional(),
    responsavel: z.string().optional(),
    status: z.string().optional(),
    patrimonio: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(filtroPedidoSchema),
  });

  return (
    <label
      htmlFor="filtros"
      className="flex flex-col items-center text-sm font-medium leading-6 text-black"
    >
      <div className="flex hover:scale-105 hover:cursor-pointer">
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        Filtros
      </div>
      <input type="checkbox" id="filtros" className="hidden peer" />
      <div className="hidden peer-checked:block">
        <div className="flex flex-col items-center ">
          <div className="grid grid-cols-3  gap-4">
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Patrimônio
              <input
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                type="text"
                id="patrimonio"
                placeholder=""
                {...register("patrimonio")}
              ></input>
              {errors.patrimonio && (
                <span className="text-gran-red opacity-90">
                  {errors.patrimonio.message}
                </span>
              )}
            </label>
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Responsável
              <input
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                type="text"
                id="responsavel"
                placeholder=""
                {...register("responsavel")}
              ></input>
              {errors.responsavel && (
                <span className="text-gran-red opacity-90">
                  {errors.responsavel.message}
                </span>
              )}
            </label>
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Item
              <select
                {...register("item")}
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
              >
                <InputSelectItem />
              </select>
              {errors.item && (
                <span className="text-gran-red opacity-90">
                  {errors.item.message}
                </span>
              )}
            </label>
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Setor
              <select
                {...register("setor")}
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
              >
                <InputSelectSetor />
              </select>
              {errors.setor && (
                <span className="text-gran-red opacity-90">
                  {errors.setor.message}
                </span>
              )}
            </label>
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Número de série
              <input
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                type="text"
                id="nSerie"
                placeholder=""
                {...register("nSerie")}
              ></input>
              {errors.nSerie && (
                <span className="text-gran-red opacity-90">
                  {errors.nSerie.message}
                </span>
              )}
            </label>
            <label className="flex flex-col  text-sm font-medium leading-6 text-black">
              Status
              <select
                {...register("status")}
                className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
              >
                <InputSelectStatus />
              </select>
              {errors.status && (
                <span className="text-gran-red opacity-90">
                  {errors.status.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <button
              className="mt-4 bg-gran-blue bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl"
              onClick={handleSubmit(pesquisar)}
            >
              Pesquisar
            </button>
            <button
              className="mt-4 ml-4 bg-gran-red bg-opacity-70 hover:scale-105 text-white font-semibold py-1 px-2 rounded hover:shadow-xl"
              onClick={() => {
                setFiltro([""]);
                setValue("patrimonio", "");
                setValue("responsavel", "");
                setValue("item", "");
                setValue("setor", "");
                setValue("nSerie", "");
                setValue("status", "");
              }}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </label>
  );
}

export default Filtro;
