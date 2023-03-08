import { Link } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";

function Products({products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading</div>;
  } 
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  
}

export function Home(){
  const {data, isLoading, isError} = useAPI(baseURL);
  if(!isLoading){
    console.log(data)
  }
  
  return(
    <div>
      <h1>Home Page</h1>
      <Products products={data} isLoading={isLoading} isError={isError} />
    </div>
  )
}
