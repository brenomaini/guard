import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
export default function useFiltrarNotasPedido(pedidoID) {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const puxarTodasNotas = `${baseURL}/notas?filtro=pedido_id:like:${pedidoID}%`;
  const [notasPedido, setNotasPedido] = useState([]);

  async function loadNotas() {
    await fetch(puxarTodasNotas, {
      headers: { Authorization: getToken },
    })
      .then((response) => {
        return response.json();
      })
      .then((todasNotas) => {
        for (const nota of todasNotas) {
          setNotasPedido((notas) => [
            ...notas,
            {
              notaID: nota.id,
              numNota: nota.nf,
              qtdNota: nota.quantidade,
            },
          ]);
        }
      });
  }
  useEffect(() => {
    loadNotas();
  }, []);

  return notasPedido;
}
