import { useParams } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";

export function ProductPage(){
  let params = useParams();
  const {data, isLoading, isError} = useAPI((baseURL+ params.id));
  if(!isLoading){
    console.log(data)
  }
  if (isError) {
    return <div>Error</div>;
  }
  
  return(
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>${data.price}</p>
      <p>${data.discountedPrice}</p>
      <img src={data.imageUrl} alt="{data.title}" />
    </main>
  )
}

export default ProductPage