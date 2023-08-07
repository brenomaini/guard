import { PencilIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useQueryClient } from "react-query";
import Swal from "sweetalert2";
import CamposPatrimonio from "../camposPatrimonio";

export default function modalEditarStatusPat({ pedido }) {
  const queryClient = useQueryClient();

  const [showModalAddItem, setShowModalAddItem] = React.useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;

  function editarPedido(data) {
    const form = new FormData();
    const novaData = Intl.DateTimeFormat("pt-BR").format(new Date());
    form.append("patrimonios", JSON.stringify(data.patrimonios));
    form.append("item_id", pedido.item_id);
    form.append("pedido_id", pedido.id);
    form.append("setor_id", pedido.setor_id);
    form.append("data_update", novaData);
    form.append("status", "Disponível");
    form.append("agente", "emaildoagente@email.com");
    const options = {
      method: "POST",
      body: form,
    };
    options.headers = new Headers({
      Accept: "application/json",
    });

    const url = `${baseURL}/itemestoque`;
    try {
      fetch(url, options).then((response) => {
        if (response.ok) {
          queryClient.invalidateQueries({ queryKey: ["pedidos"] });
          setShowModalAddItem(false);

          Swal.fire({
            title: "Sucesso",
            text: `Pedido editado com sucesso.`,
            icon: "success",
            confirmButtonColor: "#0D134C",
            confirmButtonText: "OK",
          });
        } else {
          console.log(response.json());
        }
      });
    } catch (e) {
      Swal.showValidationMessage(`Erro: ${e.message}`);
    }
  }

  return (
    <>
      <Tooltip content="Editar status do pedido" placement="top-end">
        <button
          className="ml-4 mb-1 ease-linear transition-all duration-150 hover:scale-125"
          type="button"
          data-tooltip-target="tooltip-default"
          onClick={() => {
            setShowModalAddItem(true);
          }}
        >
          <PencilIcon
            className="h-4 w-4 text-gran-blue hover:text-white"
            aria-hidden="true"
          />
        </button>
      </Tooltip>

      {showModalAddItem ? (
        <>
          <CamposPatrimonio
            pedido={pedido}
            editarPedido={editarPedido}
            setShowModalAddItem={setShowModalAddItem}
          />
        </>
      ) : null}
    </>
  );
}
