import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import NotFound from "./pages/NotFound";
import Produtos from "./pages/Products/Produtos";
import Usuarios from "./pages/Usuarios";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
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