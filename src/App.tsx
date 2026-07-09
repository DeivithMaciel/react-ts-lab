import { Route, Routes } from "react-router-dom";
import { useEffect } from "react"

import { fetchUsuarios } from "./features/Usuarios/usuariosSlice";
import { fetchProdutos } from "./features/Produtos/produtos.slice";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho/Carrinho";
import NotFound from "./pages/NotFound";
import Produtos from "./pages/Products/Produtos";
import Usuarios from "./pages/Usuarios";
import Auth from "./pages/Auth";

import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { UseToast } from "./context/toastContext";
import { useAppDispatch, useAuth, useCarrinho } from "./hooks/hooks";

function App() {

  const { carrinho } = useCarrinho()
  const auth = useAuth()
  const { message } = UseToast()
  
  const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchProdutos())
      }, [dispatch])

    useEffect(() => {
      dispatch(fetchUsuarios());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
  },[carrinho])

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])

  return (
    <>
    <Navbar />
    <Toast />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/carrinho" element={
        <ProtectedRoute>
          <Carrinho />
        </ProtectedRoute>
      }/>
    </Routes>
    {message && <h2>{message}</h2>}
    <Footer />
    </>
  )
}

export default App;