import React from "react";
import { Link, useParams } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

function Home() {
  return <div>Home</div>;
}

function Products() {
  return <div>Products</div>;
}

function Product() {
  let params = useParams();
  console.log(params);
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>;
}

export { Nav, Home, Product, Products };





