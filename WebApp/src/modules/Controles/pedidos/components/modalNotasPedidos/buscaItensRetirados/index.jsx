import { useQuery } from "react-query";
const baseURL = import.meta.env.VITE_BASE_URL;

const fetchItensRetirados = async (idNota) => {
  let response;
  const request = await fetch(
    `http://127.0.0.1:8000/api/itemestoque?filtro=status:like:RETIRADO;nota_id:like:${idNota.queryKey[1].idNota}`
  )
    .then((res) => res.json())
    .then((res) => {
      response = res.data;
    });

  return response.length;
};

function BuscarItensRetirados(idNota) {
  const { status, fetchStatus, data } = useQuery({
    queryKey: ["retirados", idNota],
    queryFn: fetchItensRetirados,
    // The query will not execute until the userId exists
    enabled: !!idNota,
  });

  if (status === "loading") {
    return (
      <>
        <div className="table-cell align-middle">Loading...</div>
        <div className="table-cell align-middle">Loading...</div>
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
      <div className="table-cell align-middle"> {idNota.quantidade - data}</div>
      <div className="table-cell align-middle"> {data}</div>
    </>
  );
}

export default BuscarItensRetirados;
