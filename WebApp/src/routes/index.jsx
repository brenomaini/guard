import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import { RequireAuth } from "react-auth-kit";
import CadastroCategoria from "../modules/Cadastros/estoque/categoria";
import Cadastroitem from "../modules/Cadastros/estoque/item";
import CadastroMarca from "../modules/Cadastros/estoque/marca";
import CadastroSetor from "../modules/Cadastros/estoque/setor";
import Itens from "../modules/Controles/items/page";
import Pedidos from "../modules/Controles/pedidos/page";
import Admissao from "../modules/Funcionario/admissao";
import Desligamento from "../modules/Funcionario/desligamento";
import Infos from "../modules/Funcionario/infos";
import Inicio from "../modules/Relatorios/dashboardInicial/page";
import Entradas from "../modules/Relatorios/estoque/entradas";
import Saidas from "../modules/Relatorios/estoque/saidas";
import CadastroAgente from "../modules/Usuarios/estoque/cadastroAgente";
import Login from "../modules/Usuarios/login";
import Register from "../modules/Usuarios/register";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath={"/login"}>
              <Inicio />
            </RequireAuth>
          }
        />
        <Route
          path="/controlePedidos"
          element={
            <RequireAuth loginPath={"/login"}>
              <Pedidos />
            </RequireAuth>
          }
        />
        <Route
          path="/controleItens"
          element={
            <RequireAuth loginPath={"/login"}>
              <Itens />
            </RequireAuth>
          }
        />
        <Route
          path="/cadastroItem"
          element={
            <RequireAuth loginPath={"/login"}>
              <Cadastroitem />
            </RequireAuth>
          }
        />

        <Route
          path="/cadastroCategoria"
          element={
            <RequireAuth loginPath={"/login"}>
              <CadastroCategoria />
            </RequireAuth>
          }
        />
        <Route
          path="/cadastroMarca"
          element={
            <RequireAuth loginPath={"/login"}>
              <CadastroMarca />
            </RequireAuth>
          }
        />
        <Route
          path="/cadastroSetor"
          element={
            <RequireAuth loginPath={"/login"}>
              <CadastroSetor />
            </RequireAuth>
          }
        />
        <Route
          path="/entradas"
          element={
            <RequireAuth loginPath={"/login"}>
              <Entradas />
            </RequireAuth>
          }
        />
        <Route
          path="/saidas"
          element={
            <RequireAuth loginPath={"/login"}>
              <Saidas />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/desligamento"
          element={
            <RequireAuth loginPath={"/login"}>
              <Desligamento />
            </RequireAuth>
          }
        />
        <Route
          path="/admissao"
          element={
            <RequireAuth loginPath={"/login"}>
              <Admissao />
            </RequireAuth>
          }
        />
        <Route
          path="/infos"
          element={
            <RequireAuth loginPath={"/login"}>
              <Infos />
            </RequireAuth>
          }
        />
        <Route
          path="/cadastroAgente"
          element={
            <RequireAuth loginPath={"/login"}>
              <CadastroAgente />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
