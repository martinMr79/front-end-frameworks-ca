import React from "react";
import { Nav, Contact, Checkout, CheckoutSuccess } from "./components/layout/Header/Nav";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, ProductPage } from "./pages/"


function App() {  

return (   
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="product/:id" element={<ProductPage />} />        
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
