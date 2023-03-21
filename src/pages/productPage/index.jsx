import { useParams } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import * as S from "./styled"
import { useCart } from "../../hooks/useCart";

function ProductPage(){
  let params = useParams();
  const {data, fetchProducts, isLoading, hasError} = useAPI((baseURL+ params.id));
  const { addToCart } = useCart(); 
  const { cart, clearCart } = useCart(); 

  if(isLoading){
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Error</div>;
  }
  
  function addToCartClick() {
    addToCart(data.id); 
  }
  
  
  return (
    <div>
      <div>
        <button onClick={clearCart}>CLEAR</button>
        Cart:{" "}
        <div>
          {cart?.map((item) => (
            <div>{data.id}</div>
          ))}
        </div>
      </div>

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
        <S.AddToCartButton onClick={addToCartClick}>ADD TO CART</S.AddToCartButton>
      </S.ProductWrapper>

      {/*<main>  
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
      </main>*/}
    </div>
  );
}

export default ProductPage;