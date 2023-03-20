import React from "react";
import { Nav, Checkout, CheckoutSuccess } from "./components/layout/Header/Nav";
import  Footer  from "./components/layout/Footer/index";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, ProductPage, ContactPage } from "./pages"




function App() {  

return (   
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="product/:id" element={<ProductPage />} />        
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
