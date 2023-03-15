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

    <img src={data.imageUrl} alt={data.title} />

    <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price kr{data.price}</p>
      {data.price !== data.discountedPrice && (
        <p>Now Only! kr{data.discountedPrice}</p>
      )}

      {data?.reviews && (
        <div>
          <h2>Reviews</h2>
          {data.reviews.map((review) => (
            <div key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Description: {review.description}</p>
              <p>Username: {review.username}</p>
            </div>
          ))}
        </div>
      )}
   
      
    </main>
  )
}

export default ProductPage