import "./App.css";
import { Nav, Product, Contact, Checkout, CheckoutSuccess } from "./components/layout/Header/Nav";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home"


function App() {  

return (   
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />        
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
