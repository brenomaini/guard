import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import useBuscarNotas from "../../../hooks/useBuscarNotasPedido";

export default function linhaRetirados({ pedidoID }) {
  const notas = useBuscarNotas(pedidoID);

  return (
    <>
      {notas.isFetching && notas.isLoading ? (
        <div> Loading</div>
      ) : notas.isError ? (
        <div>notas.error.message</div>
      ) : (
        notas.data.map((nota, index) => {
          return (
            <div
              className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16 "
              key={index}
            >
              <div className="text-xl text-black table-cell align-middle max-sm:text-base">
                <a
                  href={nota.notafile}
                  title="link nota fiscal"
                  target="_blank"
                >
                  {nota.nf}
                </a>
              </div>
              <div className="table-cell align-middle"> {nota.item.nome}</div>
              <div className="table-cell align-middle"> Disponíveis aqui</div>
              <div className="table-cell align-middle"> Retirados aqui</div>

              <div className="table-cell align-middle">{nota.quantidade}</div>

              <div className="table-cell align-middle">
                <Tooltip
                  content={`Buscar item no estoque`}
                  placement="top"
                  className="z-50"
                >
                  <MagnifyingGlassIcon
                    className="h-6 w-6 text-gran-blue cursor-pointer hover:scale-110"
                    aria-hidden="true"
                  />
                </Tooltip>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
