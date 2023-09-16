import { PencilIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";
import { z } from "zod";
import SelectOptions from "../selectOptions";

export default function editarResponsavel({ item }) {
  let statusAtual = item.status.toUpperCase();
  const queryClient = useQueryClient();

  const baseURL = import.meta.env.VITE_BASE_URL;
  const itemResponsavelSchema = z
    .object({
      descricao: z.string().optional().or(z.literal("")),
      status: z
        .string()
        .nonempty("Selecione o novo status do item.")
        .refine(
          (status) => {
            if (status == statusAtual) {
              return false;
            } else {
              return true;
            }
          },
          { message: `O Status atual já é ${statusAtual}` }
        ),
      responsavel: z
        .string()
        .email("Digite um e-mail válido")
        .optional()
        .or(z.literal("")),
    })
    .refine(
      (data) =>
        (data.status === "RETIRADO" && data.responsavel !== "") ||
        (data.status === "EMPRESTADO" && data.responsavel !== "") ||
        (data.status != "RETIRADO" && data.status != "EMPRESTADO"),
      {
        message: "Email obrigatório para item retirado.",
        path: ["responsavel"],
      }
    )
    .refine(
      (data) => {
        if (statusAtual === "MANUTENÇÃO" && data.descricao === "") {
          return false;
        } else {
          return true;
        }
      },
      {
        message: "Descricao obrigatória para manutenções realizadas",
        path: ["descricao"],
      }
    );

  const {
    register,

    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itemResponsavelSchema),
  });

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);

  function editarItem(data) {
    const form = new FormData();
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    const url = `${baseURL}/itemestoque/${item.id}`;
    let infosModalSucesso = "Pedido editado com sucesso.";
    form.append("responsavel", data?.responsavel ?? "");
    form.append("status", data.status);
    form.append("_method", "PATCH");
    form.append("data_update", novaData);
    form.append("agente", "emailagente@gran.com");
    const options = {
      method: "POST",
      body: form,
    };
    const formPedido = new FormData();
    const urlPedido = `${baseURL}/pedido/${item.pedido_id}`;
    formPedido.append("_method", "PATCH");
    formPedido.append("agente", "emailagente@gran.com");
    formPedido.append("data_update", novaData);
    if (data.status == "DISPONÍVEL" || data.status === "PARA EMPRÉSTIMO") {
      let diminuiRetirados = 0;
      diminuiRetirados = item.pedido.qtdRetirados - 1;

      formPedido.append("qtdRetirados", diminuiRetirados);
    } else if (
      data.status != "DISPONÍVEL" &&
      data.status != "PARA EMPRÉSTIMO" &&
      (statusAtual === "DISPONÍVEL" || statusAtual === "PARA EMPRÉSTIMO")
    ) {
      let aumentaRetirados = 0;
      aumentaRetirados = item.pedido.qtdRetirados + 1;

      formPedido.append("qtdRetirados", aumentaRetirados);
    }
    const optionsPedido = {
      method: "POST",
      body: formPedido,
    };

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          fetch(urlPedido, optionsPedido).then((response) => {
            if (response.ok) {
              if (statusAtual === "MANUTENÇÃO") {
                const formManutencao = new FormData();
                const urlManutencao = `${baseURL}/manutencoes`;

                formManutencao.append("itens_estoque_id", item.id);
                formManutencao.append("descricao", data.descricao);
                const optionsManutencao = {
                  method: "POST",
                  body: formManutencao,
                };
                fetch(urlManutencao, optionsManutencao).then((response) => {
                  response.ok
                    ? (infosModalSucesso =
                        "Pedido alterado e manutenção inserida.")
                    : (infosModalSucesso =
                        "Erro ao inserir manutenção, informe o administrador");
                });
              }

              queryClient.invalidateQueries({ queryKey: ["pedidos"] });
              queryClient.invalidateQueries({
                queryKey: ["itensEstoque"],
              });
              queryClient.invalidateQueries({
                queryKey: ["manutencoes"],
              });
            }
          });
          setShowModalAddItem(false);
          reset();
          Swal.fire({
            title: "Sucesso",
            text: `${infosModalSucesso}`,
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => Swal.showValidationMessage(`Erro: ${error}`));
  }

  return (
    <>
      <Tooltip content="Editar status do pedido" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => setShowModalAddItem(true)}
        >
          <PencilIcon
            className="h-4 w-4 text-guard-green hover:text-white"
            aria-hidden="true"
          />
        </button>
      </Tooltip>

      {showModalAddItem ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar responsável pelo item
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
                <div className="relative flex p-4 flex-col items-center justify-center">
                  <div className="flex w-full flex-col justify-center flex-wrap h-full items-center ">
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Item
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6">
                        {item.item.nome}
                      </span>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Patrimônio
                      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black  ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6">
                        {item.patrimonio}
                      </span>
                    </label>
                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      Status
                      <select
                        {...register("status")}
                        className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black  ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                      >
                        <SelectOptions />
                      </select>
                      {errors.status && (
                        <span className="text-guard-red opacity-90">
                          {errors.status.message}
                        </span>
                      )}
                    </label>

                    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                      E-mail do recebedor
                      <input
                        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black  ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                        type="text"
                        id="responsavel"
                        placeholder="nome.sobrenome@gran.com"
                        {...register("responsavel")}
                      />
                      {errors.responsavel && (
                        <span className="text-guard-red opacity-90">
                          {errors.responsavel.message}
                        </span>
                      )}
                    </label>

                    <div>
                      {statusAtual === "MANUTENÇÃO" ? (
                        <label className="flex flex-col  text-sm font-medium leading-6 text-black">
                          O que foi realizado?
                          <input
                            className="relative w-72 h-16 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black  ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
                            type="text"
                            id="descricao"
                            placeholder="O que foi feito na manutenção?"
                            {...register("descricao")}
                          />
                          {errors.descricao && (
                            <span className="text-guard-red opacity-90">
                              {errors.descricao.message}
                            </span>
                          )}
                        </label>
                      ) : null}
                    </div>
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
                    className="text-white bg-guard-green font-bold uppercase px-6 py-2 text-sm rounded mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={handleSubmit(editarItem)}
                  >
                    Salvar
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
