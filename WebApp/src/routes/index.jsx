import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import CadastroCategoria from "../modules/Cadastros/estoque/categoria";
import Cadastroitem from "../modules/Cadastros/estoque/item";
import CadastroMarca from "../modules/Cadastros/estoque/marca";
import CadastroSetor from "../modules/Cadastros/estoque/setor";
import Entradas from "../modules/Relatorios/estoque/entradas";
import Saidas from "../modules/Relatorios/estoque/saidas";
import CadastroAgente from "../modules/Usuarios/estoque/cadastroAgente";
import Admissao from "../pages/granLover/admissao";
import Desligamento from "../pages/granLover/desligamento";
import Infos from "../pages/granLover/infos";
import Inicio from "../pages/inicio";
import CadastroItemAvulso from "../pages/itemAvulso";
import Login from "../pages/login";
import Pedidos from "../pages/pedidos";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/controlePedidos" element={<Pedidos />} />
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
