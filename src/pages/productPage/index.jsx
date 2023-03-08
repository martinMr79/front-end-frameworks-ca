import { Link, useParams } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";

export function ProductPage(){
  let params = useParams();
  const {data, isLoading, isError} = useAPI((baseURL+ params.id));
  if(!isLoading){
    console.log(data)
  }
  
  return(
    <main>
      <h1>Product Page</h1>
      
    </main>
  )
}

export default ProductPage