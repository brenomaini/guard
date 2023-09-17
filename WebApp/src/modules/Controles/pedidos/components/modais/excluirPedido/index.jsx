import { TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useAuthUser } from "react-auth-kit";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";

export default function ExcluirPedido({ pedido }) {
  const auth = useAuthUser();
  const queryClient = useQueryClient();
  const baseURL = import.meta.env.VITE_BASE_URL;

  function editarPedido() {
    const form = new FormData();
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    form.append("agente", auth().email);
    form.append("enable", 0);
    form.append("_method", "PATCH");
    form.append("data_update", novaData);

    const options = {
      method: "POST",
      body: form,
    };

    Swal.fire({
      title: "Você tem certeza que deseja excluir esse pedido?",
      text: "Não será possível reverter essa alteração!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D134C",
      cancelButtonColor: "#DD303E",
      confirmButtonText: "Sim, desejo excluí-lo",
      cancelButtonText: "Não, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${baseURL}/pedido/${pedido.id}`;

        fetch(url, options).then((response) => {
          if (response.ok) {
            queryClient.invalidateQueries({ queryKey: ["pedidos"] });

            Swal.fire({
              title: "Confirmado",
              text: "Status editado com sucesso",
              icon: "success",
              confirmButtonColor: "#0D134C",
              confirmButtonText: "OK",
            });
          } else {
            Swal.showValidationMessage(`Erro: ${response.statusText}`);
          }
        });
      }
    });
  }

  return (
    <>
      <Tooltip content="Excluir pedido" placement="top">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => editarPedido()}
        >
          <TrashIcon
            className="h-6 w-6 text-guard-green hover:text-white"
            aria-hidden="true"
          />
        </button>
      </Tooltip>
    </>
  );
}
