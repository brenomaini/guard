import { PencilIcon } from "@heroicons/react/24/outline";

export default function linhaRetirados({ item }) {
  return (
    <div className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 ">
      <div className="text-xl text-black table-cell items-center max-sm:text-base ">
        nota: {item.nota}
      </div>
      <div className="table-cell"> {item.item}</div>
      <div className="table-cell"> {item.setor}</div>
      <div className="table-cell"> {item.aprovador}</div>
      <div className="table-cell"> {item.recebedor}</div>
      <div className="table-cell"> {item.agente}</div>
      <div className="table-cell"> {item.data}</div>
      <div className="table-cell"> {item.patrimonio}</div>
      <div className="table-cell">
        <PencilIcon
          className="h-6 w-6 text-gran-blue cursor-pointer hover:scale-110"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
