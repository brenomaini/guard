import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import CadastroCategoria from "../pages/cadastros/cadastroCategoria";
import Cadastroitem from "../pages/cadastros/cadastroItem";
import CadastroMarca from "../pages/cadastros/cadastroMarca";
import Entradas from "../pages/entradas";
import Desligamento from "../pages/granLover/desligamento";
import Inicio from "../pages/inicio";
import ItensEstoque from "../pages/itens-estoque";
import Login from "../pages/login";
import Saidas from "../pages/saidas";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/controleEstoque" element={<ItensEstoque />} />
        <Route path="/cadastroItem" element={<Cadastroitem />} />
        <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/cadastroMarca" element={<CadastroMarca />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/saidas" element={<Saidas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/desligamento" element={<Desligamento />} />
      </Routes>
    </BrowserRouter>
  );
}
