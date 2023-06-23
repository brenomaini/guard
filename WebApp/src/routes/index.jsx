import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import Entradas from "../modules/Relatorios/estoque/entradas";
import Saidas from "../modules/Relatorios/estoque/saidas";
import CadastroAgente from "../modules/Usuarios/estoque/pages";
import CadastroCategoria from "../pages/cadastros/cadastroCategoria";
import Cadastroitem from "../pages/cadastros/cadastroItem";
import CadastroMarca from "../pages/cadastros/cadastroMarca";
import CadastroSetor from "../pages/cadastros/cadastroSetor";
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
