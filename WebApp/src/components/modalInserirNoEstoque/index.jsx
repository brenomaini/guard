import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import InputSelectItem from "../Inputs/inputSelectItem";
import InputSelectLocalizacao from "../Inputs/inputSelectLocalizacao";
import InputSelectSetor from "../Inputs/inputSelectSetor";
import InputSelectStatus from "../Inputs/inputSelectStatus";

export default function ModalInserirItem({ insereItemEstoque }) {
  const { register, handleSubmit } = useForm();

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function insereEstoque(data) {
    let estaVazio = true;
    for (const info in data) {
      if (data[info] == "" && info != "retirado" && info != "disponivel") {
        estaVazio = `O campo ${info} não pode estar vazio`;
      }
    }
    if (estaVazio === true) {
      insereItemEstoque(data);
      Swal.fire({
        title: "Confirmado",
        text: "Item cadastrado no estoque!",
        icon: "success",
        confirmButtonColor: "#0D134C",
        confirmButtonText: "OK",
      });
      setShowModalAddItem(false);
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
    <>
      <Tooltip content="Inserir item no estoque" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => setShowModalAddItem(true)}
        >
          <PlusCircleIcon
            className="h-12 w-12 text-gran-blue "
            aria-hidden="true"
          />
        </button>
      </Tooltip>

      {showModalAddItem ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Inserir item no estoque
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalAddItem(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Qual item você deseja inserir?
                  </p>
                  <div className="flex w-full justify-around flex-wrap h-96 items-center ">
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Item
                      <select
                        {...register("item")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      >
                        <InputSelectItem />
                      </select>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      E-Mail do solicitante
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="text"
                        id="solicitante"
                        placeholder="Digite aqui"
                        {...register("solicitante")}
                      />
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Setor
                      <select
                        {...register("setor")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      >
                        <InputSelectSetor />
                      </select>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Status
                      <select
                        {...register("status")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      >
                        <InputSelectStatus />
                      </select>
                    </label>

                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Nota fiscal
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="text"
                        id="nf"
                        placeholder="00000"
                        {...register("nf")}
                      />
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Imagem NF
                      <input
                        type="file"
                        name=""
                        id=""
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      />
                    </label>
                    <label className="flex flex-col w-72 text-sm font-medium leading-6 text-black">
                      Quantidade
                      <input
                        className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="number"
                        id="nf"
                        placeholder="00"
                        {...register("quantidade")}
                      />
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Localização
                      <select
                        {...register("localizacao")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                      >
                        <InputSelectLocalizacao />
                      </select>
                    </label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-gran-red bg-opacity-80 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => setShowModalAddItem(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-gran-blue bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={handleSubmit(insereEstoque)}
                  >
                    Inserir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
