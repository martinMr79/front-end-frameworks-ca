import { useParams } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import * as S from "./styled"


function ProductPage(){
  let params = useParams();
  const {data, isLoading, isError} = useAPI((baseURL+ params.id));
  if(!isLoading){
   
  }
  if (isError) {
    return <div>Error</div>;
  }
  
  function addtoCartClick() {
    console.log(data.id); 

  }

  
  return (
    <S.ProductWrapper> 
      <S.ProductHeading>{data.title}</S.ProductHeading>
      <S.ProductImageContainer>
        <S.ProductImage src={data.imageUrl} alt={data.title}/>
      </S.ProductImageContainer>
     <S.RatingStarsContainer>*****</S.RatingStarsContainer>
     <S.PricesContainer>
    
     <S.Price isValid={data.price === data.discountedPrice}>{data.price}</S.Price>

       <div>Now Only! kr{data.discountedPrice < data.price && data.discountedPrice}</div>
     
      </S.PricesContainer>
      <S.AddtoCartButon onClick={addtoCartClick}>ADD TO CART</S.AddtoCartButon>
    </S.ProductWrapper>
  


      /*<main>

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
   
      
    </main> */
  )



    
  
}

export default ProductPage