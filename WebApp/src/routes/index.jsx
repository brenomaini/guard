import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import CadastroCategoria from "../modules/Cadastros/estoque/categoria";
import Cadastroitem from "../modules/Cadastros/estoque/item";
import CadastroMarca from "../modules/Cadastros/estoque/marca";
import CadastroSetor from "../modules/Cadastros/estoque/setor";
import Itens from "../modules/Controles/items/page";
import CadastroItemAvulso from "../modules/Controles/itemsAvulsos/page";
import Pedidos from "../modules/Controles/pedidos/page";
import Admissao from "../modules/Funcionario/admissao";
import Desligamento from "../modules/Funcionario/desligamento";
import Infos from "../modules/Funcionario/infos";
import Inicio from "../modules/Relatorios/dashboardInicial/page";
import Entradas from "../modules/Relatorios/estoque/entradas";
import Saidas from "../modules/Relatorios/estoque/saidas";
import CadastroAgente from "../modules/Usuarios/estoque/cadastroAgente";
import Login from "../pages/login";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/controlePedidos" element={<Pedidos />} />
        <Route path="/controleItens" element={<Itens />} />
        <Route path="/cadastroItem" element={<Cadastroitem />} />
        <Route path="/itemAvulso" element={<CadastroItemAvulso />} />
        <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/cadastroMarca" element={<CadastroMarca />} />
        <Route path="/cadastroSetor" element={<CadastroSetor />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/saidas" element={<Saidas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/desligamento" element={<Desligamento />} />
        <Route path="/admissao" element={<Admissao />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/cadastroAgente" element={<CadastroAgente />} />
      </Routes>
    </BrowserRouter>
  );
}
