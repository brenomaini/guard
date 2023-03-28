import Modal from "../modalRetirarItem";
import ModalItensRetirados from "../modalVerRetirados";

export default function LinhaControle({ item }) {
  return (
    <div className="table-row-group group text-center border border-black ">
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
          {item.nota}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-2/6">
          {item.item}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base 3/6">
          {item.setor}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-1/12">
          {item.disponivel}
        </div>
        <div
          className={
            item.status == "Disponível"
              ? `text-xl table-cell justify-center items-center text-center p-2 rounded-md max-sm:text-base w-full bg-green`
              : item.status == "Aguardando fornecedor"
              ? `text-xl table-cell justify-center text-center items-center p-2 rounded-md max-sm:text-base w-full bg-yellow`
              : item.status == "Em falta"
              ? `text-xl table-cell text-white justify-center text-center items-center p-2 rounded-md max-sm:text-base w-full bg-gran-red`
              : null
          }
        >
          {item.status}
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
      </div>
    </div>
  );
}
