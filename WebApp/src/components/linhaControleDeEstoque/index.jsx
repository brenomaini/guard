import {
  MagnifyingGlassIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

export default function LinhaControle({ item }) {
  return (
    <>
      <div className="flex gap-4">
        <MinusCircleIcon
          className="h-6 w-6 text-gran-blue"
          aria-hidden="true"
        />
        <MagnifyingGlassIcon
          className="h-6 w-6 text-gran-blue font-extrabold"
          aria-hidden="true"
        />
      </div>
      <div className="text-xl text-black flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.nota}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.item}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.setor}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.disponivel}
      </div>
      <div
        className={
          item.status == "Disponível"
            ? `text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full bg-green`
            : item.status == "Aguardando fornecedor"
            ? `text-xl flex justify-center text-center items-center p-2 rounded-md max-sm:text-base w-full bg-yellow`
            : item.status == "Em falta"
            ? `text-xl flex text-white justify-center items-center p-2 rounded-md max-sm:text-base w-full bg-gran-red`
            : null
        }
      >
        {item.status}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.quantidade}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.retirado}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.patrimonio}
      </div>
      <div className="text-xl flex justify-center items-center p-2 rounded-md max-sm:text-base w-full">
        {item.localizacao}
      </div>
    </>
  );
}
