import { useQuery } from "react-query";
function useBuscaItensRetiradosNota(notaID) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=notas_fiscais_id:like:${notaID};status:not%20like:DISPONÍVEL`;

  return useQuery({
    queryKey: ["retirados", notaID],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useBuscaItensRetiradosNota;
