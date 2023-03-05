import "./App.css";
import { Nav, Home, Product, Contact, Checkout, CheckoutSuccess } from "./components/layout/Header/Nav";
import { Routes, Route} from "react-router-dom";



function App() {  

return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />        
        <Route path="Checkout" element={<Checkout />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
    </div>
  );
}
export default App;
