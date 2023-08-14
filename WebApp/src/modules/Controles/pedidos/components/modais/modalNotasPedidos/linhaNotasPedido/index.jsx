import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaItensRetirados from "../../../../../../../hooks/useBuscaItensRetiradosPorNota";
const baseURL = import.meta.env.VITE_BASE_URL_STORAGE;

export default function linhaRetirados({ pedido }) {
  return (
    <>
      {pedido.notas.map((nota, index) => {
        const retirados = useBuscaItensRetirados(nota.id);
        return (
          <div
            className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16"
            key={index}
          >
            <div className="text-xl text-black table-cell align-middle max-sm:text-base">
              <a
                href={baseURL + nota.notafile}
                title="link nota fiscal"
                target="_blank"
              >
                {nota.nf}
              </a>
            </div>
            <div className="table-cell align-middle"> {pedido.item.nome}</div>
            <div className="table-cell align-middle">
              {nota.quantidade - retirados?.data?.length != 0
                ? nota.quantidade - retirados?.data?.length || <Skeleton />
                : 0}
            </div>
            <div className="table-cell align-middle">
              {retirados?.data?.length != 0
                ? retirados?.data?.length || <Skeleton />
                : 0}
            </div>
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
      })}
    </>
  );
}
