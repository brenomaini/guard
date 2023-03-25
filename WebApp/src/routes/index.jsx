import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import BuscaItem from "../pages/buscaItem";
import Inicio from "../pages/inicio";
import ItensEstoque from "../pages/itens-estoque";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/buscaItem" element={<BuscaItem />} />
        <Route path="/itensEstoque" element={<ItensEstoque />} />
      </Routes>
    </BrowserRouter>
  );
}
