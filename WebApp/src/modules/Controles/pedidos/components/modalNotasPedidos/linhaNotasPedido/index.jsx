import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";
import BuscarItensRetirados from "../buscaItensRetirados";

export default function linhaRetirados({ nota }) {
  return (
    <div className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16 ">
      <div className="text-xl text-black table-cell align-middle max-sm:text-base">
        {nota.nf}
      </div>
      <div className="table-cell align-middle"> {nota.item.nome}</div>
      <BuscarItensRetirados idNota={nota.id} quantidade={nota.quantidade} />
      <div className="table-cell align-middle"> {nota.quantidade}</div>

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
}
