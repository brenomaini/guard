import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputSelectItem from "../Inputs/inputSelectItem";
import InputSelectSetor from "../Inputs/inputSelectSetor";

export default function modalInserirPedido() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["application/pdf", "image/png"];
  const itemEstoqueSchema = z.object({
    item: z.string().nonempty("Item é obrigatório"),
    setor: z.string().nonempty("Setor é obrigatório"),
    quantidade: z.string().nonempty("Quantidade é obrigatório"),
    // nf: z.string(),
    // imagemNF: z
    //   .any()
    //   .refine(
    //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    //     `Tamanho máximo do arquivo é 5MB.`
    //   )
    //   .refine(
    //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    //     "Só são aceitos arquivos .pdf e .png"
    //   ),
    // localizacao: z.string().nonempty("Selecione onde o item está separado"),
    solicitante: z.string().nonempty("Quem solicitou a compra?"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemEstoqueSchema),
  });

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function insereEstoque(data) {
    const item = data.item.split("!");
    const itemID = item[1];
    const status = "Aguardando financeiro";
    const statusID = 2;
    const setor = data.setor.split("!");
    const setorID = setor[1];
    const form = new FormData();
    form.append("item_id", itemID);
    form.append("status_id", statusID);
    form.append("solicitante", data.solicitante);
    form.append("setor_id", setorID);
    form.append("quantidade", data.quantidade);
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
      status_id:
        statusID +
        "Provavelmente vai ser ser Aguardando financeiro/Fornecedor devo deixar fixado apenas essas duas opçoes",
      quantidade: data.quantidade,
      solicitante: data.solicitante,
      agente: "email@email.com",
    };
    console.log(enviarBD);

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
      <Tooltip content="Inserir pedido no estoque" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => setShowModalAddItem(true)}
        >
          <PlusCircleIcon
            className="h-12 w-12 text-gran-blue"
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
                    Inserir um novo pedido
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
                    Qual item você deseja inserir o pedido?
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
                      E-Mail do solicitante
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="text"
                        id="solicitante"
                        placeholder="Digite aqui"
                        {...register("solicitante")}
                      />
                      {errors.solicitante && (
                        <span className="text-gran-red opacity-90">
                          {errors.solicitante.message}
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
                      Novo status
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
                        Aguardando financeiro
                      </span>
                    </label>

                    {/* <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Nota fiscal
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        type="text"
                        id="nf"
                        placeholder="00000"
                        {...register("nf")}
                      />
                      {errors.nf && (
                        <span className="text-gran-red opacity-90">
                          {errors.nf.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Imagem NF
                      <input
                        type="file"
                        id="imagemNF"
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
                        {...register("imagemNF")}
                      />
                      {errors.imagemNF && (
                        <span className="text-gran-red opacity-90">
                          {errors.imagemNF.message}
                        </span>
                      )}
                    </label> */}
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
                    {/* <label className="flex flex-col  text-sm font-medium leading-6 text-black">
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
                    </label> */}
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
