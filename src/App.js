import "./App.css";
import { Nav, Home, Product, Products } from "./components/layout/Header/Nav";
import { Routes, Route} from "react-router-dom";



function App() {  

return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
export default App;
