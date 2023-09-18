import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";
function useBuscarNotas(pedidoID) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/notas?filtro=pedido_id:like:`;
  const authHeader = useAuthHeader();
  const getToken = authHeader();

  return useQuery({
    queryKey: ["notas", pedidoID],
    queryFn: () =>
      fetch(url + pedidoID, { headers: { Authorization: getToken } }).then(
        (res) => res.json()
      ),
    keepPreviousData: true,
  });
}

export default useBuscarNotas;
