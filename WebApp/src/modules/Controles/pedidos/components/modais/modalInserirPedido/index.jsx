import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { z } from "zod";
import InputSelectItem from "../../../../../../components/Inputs/inputSelectItem";
import InputSelectSetor from "../../../../../../components/Inputs/inputSelectSetor";

export default function modalInserirPedido() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const queryClient = useQueryClient();
  const auth = useAuthUser();

  const baseURL = import.meta.env.VITE_BASE_URL;
  const itemEstoqueSchema = z.object({
    item: z.string().nonempty("Item é obrigatório"),
    setor: z.string().nonempty("Setor é obrigatório"),
    numero_ticket: z.string().nonempty("Ticket é obrigatório"),
    motivo: z.string().nonempty("Motivo do pedido é obrigatório"),
    quantidade: z.string().nonempty(`Quantos itens serão comprados?`),
    solicitante: z
      .string()
      .email("Digite o e-mail do funcionario")
      .nonempty("Quem solicitou a compra?"),
    aprovador: z
      .string()
      .email("Digite o e-mail do funcionario")
      .nonempty("Quem aprovou a compra?"),
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
    const setor = data.setor.split("!");
    const setorID = setor[1];
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    const form = new FormData();
    form.append("item_id", itemID);
    form.append("setor_id", setorID);
    form.append("status", "Aguardando financeiro");
    form.append("aprovador", data.aprovador);
    form.append("quantidade", data.quantidade);
    form.append("solicitante", data.solicitante);
    form.append("numero_ticket_freshdesk", data.numero_ticket);
    form.append("motivo", data.motivo);
    form.append("agente", auth().email);
    form.append("data_update", novaData);

    const options = {
      method: "POST",
      headers: { Authorization: getToken },
      body: form,
    };

    const url = `${baseURL}/pedido`;

    fetch(url, options).then((response) => {
      console.log(response.json());
      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["pedidos"] });
        setShowModalAddItem(false);
        reset();

        Swal.fire({
          title: "Sucesso",
          text: `Item inserido com sucesso.`,
          icon: "success",
          confirmButtonColor: "#0D134C",
          confirmButtonText: "OK",
        });
      } else {
        Swal.showValidationMessage(`Erro: ${response.statusText}`);
      }
    });
  }

  return (
    <>
      <Tooltip content="Inserir pedido no estoque" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125 flex items-center underline"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => setShowModalAddItem(true)}
        >
          <PlusCircleIcon
            className="h-12 w-12 text-guard-green"
            aria-hidden="true"
          />
          Inserir pedido
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
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                      >
                        <InputSelectItem />
                      </select>
                      {errors.item && (
                        <span className="text-guard-red opacity-90">
                          {errors.item.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Ticket do pedido
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        min="0"
                        type="number"
                        id="numero_ticket"
                        placeholder="Número do ticket: Ex 00000"
                        {...register("numero_ticket")}
                      />
                      {errors.numero_ticket && (
                        <span className="text-guard-red opacity-90">
                          {errors.numero_ticket.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Motivo do pedido
                      <input
                        className="relative w-72 h-16 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        type="text"
                        id="motivo"
                        placeholder="Digite aqui"
                        {...register("motivo")}
                      />
                      {errors.motivo && (
                        <span className="text-guard-red opacity-90">
                          {errors.motivo.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      E-Mail do solicitante
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        type="text"
                        id="solicitante"
                        placeholder="Digite aqui"
                        {...register("solicitante")}
                      />
                      {errors.solicitante && (
                        <span className="text-guard-red opacity-90">
                          {errors.solicitante.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      E-Mail do aprovador
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        type="text"
                        id="aprovador"
                        placeholder="Digite aqui"
                        {...register("aprovador")}
                      />
                      {errors.aprovador && (
                        <span className="text-guard-red opacity-90">
                          {errors.aprovador.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Setor
                      <select
                        {...register("setor")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                      >
                        <InputSelectSetor />
                      </select>
                      {errors.setor && (
                        <span className="text-guard-red opacity-90">
                          {errors.setor.message}
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Novo status
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6">
                        Aguardando financeiro
                      </span>
                    </label>

                    <label className="flex flex-col w-72 text-sm font-medium leading-6 text-black">
                      Quantidade
                      <input
                        min="0"
                        className="relative w-24 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-4 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        type="number"
                        id="quantidade"
                        placeholder="00"
                        {...register("quantidade")}
                      />
                      {errors.quantidade && (
                        <span className="text-guard-red opacity-90">
                          {errors.quantidade.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-guard-red bg-opacity-80 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={() => setShowModalAddItem(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-guard-green bg-opacity-90 font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
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
