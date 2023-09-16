import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";

export default function LinhaPorItem(item) {
  const [pedido, setPedido] = useState([""]);

  useEffect(() => {
    if (item.item.pedido) {
      setPedido(item.item.pedido);
    }
  }, [item]);
  return (
    <div className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16">
      {item.item ? (
        <>
          <div className="table-cell align-middle">
            {item.item.item.nome.toUpperCase()}
          </div>
          <div className="table-cell align-middle">{item.item.data_update}</div>
          <div className="table-cell align-middle">
            {item.item.notas_fiscais.nf}
          </div>
          <div className="table-cell align-middle">
            {pedido ? pedido.id : null}
          </div>
          <div className="table-cell align-middle">{item.item.status}</div>
        </>
      ) : (
        <div>Digite um e-mail para carregar as informações</div>
      )}
    </div>
  );
}
