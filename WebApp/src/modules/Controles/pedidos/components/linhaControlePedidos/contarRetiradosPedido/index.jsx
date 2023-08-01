import { useQuery } from "react-query";
const baseURL = import.meta.env.VITE_BASE_URL;

const fetchItensRetirados = async (idPedido) => {
  let response;
  const request = await fetch(
    `${baseURL}/itemestoque?filtro=status:not%20like:Disponível;pedido_id:like:${idPedido.queryKey[1].idPedido}`
  )
    .then((res) => res.json())
    .then((res) => {
      response = res.data;
    });

  return response.length;
};

function ContarRetiradosPedido(idPedido) {
  const { status, fetchStatus, data } = useQuery({
    queryKey: ["retirados", idPedido],
    queryFn: fetchItensRetirados,
    // The query will not execute until the userId exists
    enabled: !!idPedido,
  });

  if (status === "loading") {
    return (
      <>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          Loading..
        </div>
        <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
          Loading..
        </div>
      </>
    );
  }

  if (status === "error") {
    return (
      <div className="table-cell align-middle">Error: {error.message}</div>
    );
  }

  return (
    <>
      <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
        {idPedido.quantidade - data}
      </div>
      <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
        {idPedido.quantidade}
      </div>
      <div className="text-xl table-cell justify-center items-center p-2 max-sm:text-base w-1/12">
        {data}
      </div>
    </>
  );
}

export default ContarRetiradosPedido;
