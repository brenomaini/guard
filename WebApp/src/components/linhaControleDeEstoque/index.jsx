import Modal from "../modalRetirarItem";
import ModalItensRetirados from "../modalVerRetirados";

export default function LinhaControle({ item }) {
  return (
    <div className="table-row-group group">
      <div className="table-row group-hover:bg-gran-blue group-hover:bg-opacity-25">
        <div className={`flex gap-4 `}>
          <Modal item={item} />
          <ModalItensRetirados />
        </div>
        <div
          className={`text-xl text-black table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full `}
        >
          {item.nota}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.item}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.setor}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.disponivel}
        </div>
        <div
          className={
            item.status == "Disponível"
              ? `text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full bg-green`
              : item.status == "Aguardando fornecedor"
              ? `text-xl table-cell justify-center text-center items-center p-2 rounded-md max-sm:text-base w-full bg-yellow`
              : item.status == "Em falta"
              ? `text-xl table-cell text-white justify-center items-center p-2 rounded-md max-sm:text-base w-full bg-gran-red`
              : null
          }
        >
          {item.status}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.quantidade}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.retirado}
        </div>

        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          {item.localizacao}
        </div>
      </div>
    </div>
  );
}
