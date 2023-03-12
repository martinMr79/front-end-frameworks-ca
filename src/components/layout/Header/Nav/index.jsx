import React from "react";
import { Link, useParams } from "react-router-dom";
import { NavStyle } from "./styled"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav() {
  return (

    <NavStyle>
    <nav>
      
      
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Checkout"><ShoppingCartIcon/></Link>
      <Link to="/CheckoutSuccess">Checkout Success</Link>
  
    </nav>
    

    </NavStyle>
  );
}

function Contact() {
  return <div>Contact</div>;
}

function Checkout() {
  return <div>Checkout</div>;
}

function CheckoutSuccess() {
  return <div>Checkout Success</div>;
}

function Product() {
  let params = useParams();
  console.log(params);
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

export { Nav, Product, Contact, Checkout, CheckoutSuccess };





