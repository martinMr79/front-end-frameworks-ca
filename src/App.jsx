import React from "react";
import { Nav, Checkout} from "./components/layout/Header/Nav";
import { CartPage } from "./pages/cart";
import Footer from "./components/layout/Footer/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProductPage, ContactPage, CheckoutSuccess } from "./pages";
import { useCart } from "./hooks/useCart";

function App() {
  const { cart, products } = useCart();

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
        <Route path="Cart" element={<CartPage cart={cart} products={products} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
