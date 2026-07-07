import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import NotFound from "./pages/NotFound";
import Produtos from "./pages/Products/Produtos";
import Usuarios from "./pages/Usuarios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {

  const carrinho = useSelector((state: RootState) => state.carrinho)

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
  },[carrinho])

  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;