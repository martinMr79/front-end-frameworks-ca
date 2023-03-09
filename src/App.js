import React from "react";
import { Nav, Checkout, CheckoutSuccess } from "./components/layout/Header/Nav";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, ProductPage, ContactPage } from "./pages/"
import { Search } from "./pages/home";


function App() {  

return (   
    <BrowserRouter>
      <Nav />
      <div>
        <Search />
      </div> 
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="product/:id" element={<ProductPage />} />        
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
     
    </BrowserRouter>
    
  );
}
export default App;
