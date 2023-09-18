import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";
function useInformacoesPaginacaoPedido() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/pedido?pages`;
  return useQuery({
    queryKey: ["infosPaginacaoPedido"],
    queryFn: () =>
      fetch(url, { headers: { Authorization: getToken } }).then((res) =>
        res.json()
      ),
  });
}

export default useInformacoesPaginacaoPedido;
