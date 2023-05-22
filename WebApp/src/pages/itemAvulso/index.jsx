import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import InputSelectItem from "../../components/Inputs/inputSelectItem";
import InputSelectLocalizacao from "../../components/Inputs/inputSelectLocalizacao";
import InputSelectSetor from "../../components/Inputs/inputSelectSetor";

export default function cadastroItemAvulso() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["application/pdf", "image/png"];
  const itemAvulsoSchema = z.object({
    item: z.string().nonempty("Item é obrigatório"),
    setor: z.string().nonempty("Setor é obrigatório"),
    quantidade: z.string().nonempty("Quantidade é obrigatório"),
    patrimonio: z.string().nonempty("Patrimônio é obrigatório"),
    descricao: z.string(),
    localizacao: z.string().nonempty("Selecione onde o item está separado"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemAvulsoSchema),
  });

  function insereEstoque(data) {
    const item = data.item.split("!");
    const itemID = item[1];
    const statusID = 1;
    const setor = data.setor.split("!");
    const setorID = setor[1];
    const form = new FormData();
    form.append("item_id", itemID);
    form.append("status_id", statusID);
    form.append("solicitante", data.solicitante);
    form.append("setor_id", setorID);
    form.append("quantidade", data.quantidade);
    form.append("patrimonio", data.patrimonio);
    form.append("descricao", data.descricao);
    form.append("status", "Disponível");
    form.append("agente", "teste@email.com");

    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });
    const enviarBD = {
      setor_id: setorID,
      item_id: itemID,
      status_id: statusID + "Disponveil",
      quantidade: data.quantidade,
      patrimonio: data.patrimonio,
      descricao: data.descricao,
      agente: "email@email.com",
    };
    Swal.fire({
      title: "Este é um item antigo?",
      text: "O Controle será afetado caso o item já exista em nosso estoque",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D134C",
      cancelButtonColor: "#DD303E",
      confirmButtonText: "Sim, é um item antigo",
      cancelButtonText: "Não, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(enviarBD);
        Swal.fire({
          title: "Confirmado",
          text: JSON.stringify(enviarBD),
          icon: "success",
          confirmButtonColor: "#0D134C",
          confirmButtonText: "OK",
        });
      }
    });

    // const url = `${baseURL}/estoque`;
    // try {
    //   fetch(url, options).then((response) => {
    //     if (response.ok) {
    //       setShowModalAddItem(false);
    //       reset();

    //       Swal.fire({
    //         title: "Sucesso",
    //         text: `Item inserido com sucesso.`,
    //         icon: "success",
    //         confirmButtonColor: "#0D134C",
    //         confirmButtonText: "OK",
    //       });
    //     }
    //   });
    // } catch (e) {
    //   Swal.showValidationMessage(`Erro: ${e.message}`);
    // }
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gran-blue ">
              <h3 className="text-3xl font-semibold text-white">
                Inserir um novo item avulso no estoque
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Qual item você deseja inserir no estoque?
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
                  {errors.item && (
                    <span className="text-gran-red opacity-90">
                      {errors.item.message}
                    </span>
                  )}
                </label>

                <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                  Setor pertencente
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
                  Novo status
                  <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                    Disponível
                  </span>
                </label>

                <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                  Patrimônio
                  <input
                    className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                    type="text"
                    id="patrimonio"
                    placeholder="00000"
                    {...register("patrimonio")}
                  />
                  {errors.patrimonio && (
                    <span className="text-gran-red opacity-90">
                      {errors.patrimonio.message}
                    </span>
                  )}
                </label>
                <label className="flex flex-col w-72 text-sm font-medium leading-6 text-black">
                  Quantidade
                  <input
                    className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                    type="number"
                    id="quantidade"
                    placeholder="00"
                    {...register("quantidade")}
                  />
                  {errors.quantidade && (
                    <span className="text-gran-red opacity-90">
                      {errors.quantidade.message}
                    </span>
                  )}
                </label>
                <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                  Localização
                  <select
                    {...register("localizacao")}
                    className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                  >
                    <InputSelectLocalizacao />
                  </select>
                  {errors.localizacao && (
                    <span className="text-gran-red opacity-90">
                      {errors.localizacao.message}
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
                    placeholder="Informaçoes extras"
                    className="cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                    {...register("descricao")}
                  ></textarea>
                </label>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
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
    </>
  );
}
