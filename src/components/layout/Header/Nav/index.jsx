import React from "react";
import { Link, useParams } from "react-router-dom";
import { NavStyle } from "./styled"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../../../../hooks/useCart";
import Logo from "../../../../assets/images/Logo.jpg"

function Nav() {
  const { cart } = useCart();
  
  return (
    <NavStyle>
      <nav>
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Cart"><ShoppingCartIcon/>{cart.length > 0 && <span>{cart.length}</span>}</Link>
      </nav>
    </NavStyle>
  );
}


function Checkout() {
  return <div>Checkout</div>;
}


function Product() {
  let params = useParams();

  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

export { Nav, Product, Checkout };





