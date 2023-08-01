import { useQuery } from "react-query";
import LinhaNotasPedido from "../linhaNotasPedido";
const baseURL = import.meta.env.VITE_BASE_URL;

const fetchNotas = async (pedidoID) => {
  const request = await fetch(
    `${baseURL}/notas?filtro=pedido_id:like:${pedidoID}%`
  );
  const response = await request.json();
  return response.data;
};

function BuscarNotasPedido({ pedido }) {
  const pedidoID = pedido;

  const { data, isSuccess, isError, isLoading, error } = useQuery(
    ["notas"],
    () => fetchNotas(pedidoID),
    {
      enabled: !!pedidoID,
      cacheTime: 0,
    }
  );

  if (isLoading) {
    return (
      <div className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16 ">
        <div className="text-xl text-black table-cell align-middle max-sm:text-base">
          Loading..
        </div>
        <div className="table-cell align-middle"> Loading..</div>

        <div className="table-cell align-middle"> Loading..</div>

        <div className="table-cell align-middle">Loading..</div>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map((nota, index) => (
        <LinhaNotasPedido nota={nota} key={index} />
      ))}
    </>
  );
}

export default BuscarNotasPedido;
