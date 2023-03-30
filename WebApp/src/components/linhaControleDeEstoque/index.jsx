import { TrashIcon } from "@heroicons/react/24/outline";
import ModalEditarStatus from "../modalEditarStatus";
import Modal from "../modalRetirarItem";
import ModalItensRetirados from "../modalVerRetirados";

export default function LinhaControle({ item }) {
  return (
    <div className="table-row-group group text-center border border-black">
      <div className="table-row rounded-md group-hover:bg-gran-blue group-hover:bg-opacity-25 ">
        <div
          className={`text-xl text-black table-cell items-center rounded-md max-sm:text-base `}
        >
          <Modal item={item} />
        </div>
        <div
          className={`text-xl text-black table-cell items-center  rounded-md max-sm:text-base `}
        >
          <ModalItensRetirados item={item} />
        </div>
        <div
          className={`text-xl text-black table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12 `}
        >
          {item.nf}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-2/6">
          {item.item}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base 3/6">
          {item.setor}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          {(item.disponivel = item.quantidade - item.retirado)}
        </div>
        <div
          className={
            item.status == "Disponível"
              ? `text-xl table-cell justify-center items-center text-center p-2 rounded-md max-sm:text-base w-2/12 bg-green`
              : item.status == "Aguardando fornecedor"
              ? `text-xl table-cell justify-center text-center items-center p-2 rounded-md max-sm:text-base w-2/12 bg-yellow`
              : item.status == "Em falta"
              ? `text-xl table-cell text-white justify-center text-center items-center p-2 rounded-md max-sm:text-base w-2/12 bg-gran-red`
              : null
          }
        >
          <div className="flex items-center justify-between text-center">
            {item.status}
            <ModalEditarStatus item={item} />
          </div>
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          {item.quantidade}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          {item.retirado}
        </div>

        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          {item.localizacao}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          <TrashIcon
            className="h-6 w-6 text-gran-blue cursor-pointer  hover:scale-110"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
