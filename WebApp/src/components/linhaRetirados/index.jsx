import { PencilIcon } from "@heroicons/react/24/outline";

export default function linhaRetirados({ item }) {
  return (
    <div className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16 ">
      <div className="text-xl text-black table-cell align-middle max-sm:text-base">
        {item.nota}
      </div>
      <div className="table-cell align-middle"> {item.item}</div>
      <div className="table-cell align-middle"> {item.patrimonio}</div>
      <div className="table-cell align-middle"> {item.setor}</div>
      <div className="table-cell align-middle"> {item.aprovador}</div>
      <div className="table-cell align-middle"> {item.recebedor}</div>
      <div className="table-cell align-middle"> {item.agente}</div>
      <div className="table-cell align-middle"> {item.data}</div>
      <div className="table-cell align-middle">
        <PencilIcon
          className="h-6 w-6 text-gran-blue cursor-pointer hover:scale-110"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
