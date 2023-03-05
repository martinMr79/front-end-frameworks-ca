import React from "react";
import { Link, useParams } from "react-router-dom";

function Nav() {
  return (
    <nav>
      
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact Page</Link>
      <Link to="/Checkout">Checkout Page</Link>
      <Link to="/CheckoutSuccess">Checkout Success Page</Link>

    </nav>
  );
}

function Home() {
  return <div>Home</div>;
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

export { Nav, Home, Product, Contact, Checkout, CheckoutSuccess };





