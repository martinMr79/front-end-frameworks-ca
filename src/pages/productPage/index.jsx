import { useParams } from "react-router-dom";
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/api";
import * as S from "./styled";
import { useCart } from "../../hooks/useCart";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function ProductPage() {
  let params = useParams();
  const { data, isLoading, hasError } = useAPI(baseURL + params.id);
  const { addToCart } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  function addToCartClick() {
    addToCart(data.id);
  }

  const getStarIcon = (rating, index) => {
    if (rating >= index + 1) {
      return <StarIcon key={index} />;
    } else if (rating >= index + 0.5) {
      return <StarHalfIcon key={index} />;
    } else {
      return <StarBorderIcon key={index} />;
    }
  };

  const ratingStars = Array.from({ length: 5 }).map((_, index) =>
    getStarIcon(data.rating, index)
  );

  return (
    <div>
      <S.ProductHeading>{data.title}</S.ProductHeading>

      <S.ProductWrapper>
        <S.ProductImageContainer>
          <S.ProductImage src={data.imageUrl} alt={data.title} />
        </S.ProductImageContainer>

        <S.ProductDetailsWrapper>
          <S.ProductDetailsContainer>
            <p>{data.description}</p>
            <S.RatingStarsContainer>{ratingStars}</S.RatingStarsContainer>
            <S.PricesContainer>
              <S.Price isValid={data.price === data.discountedPrice}>
                {data.price}
              </S.Price>
              <div>
                Now Only! kr
                {data.discountedPrice < data.price && data.discountedPrice}
              </div>
            </S.PricesContainer>
            <S.AddToCartButton onClick={addToCartClick}>
              ADD TO CART
            </S.AddToCartButton>
          </S.ProductDetailsContainer>
        </S.ProductDetailsWrapper>
      </S.ProductWrapper>

      {data?.reviews && (
        <div>
          <h2>Reviews</h2>
          {data.reviews.map((review) => (
            <div key={review.id}>
              <p>Description: {review.description}</p>
              <p>Username: {review.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;