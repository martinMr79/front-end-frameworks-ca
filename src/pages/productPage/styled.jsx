import styled from "styled-components"

export const ProductWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  min-height: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media screen and (min-width: 768px) {
    
  }
`;

export const ProductImage = styled.img`
  height: 95%;
  width: 95%;
  object-fit: contain;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    object-fit: cover;
    max-height: 800px;
  }
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  max-width: 750px;
  margin: 20px auto;
  flex: 1;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const ProductHeading = styled.h3``;

export const RatingStarsContainer = styled.div``;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Price = styled.div`
  color: ${(props) => (props.isValid ? "initial" : "red")};
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
  margin-right: 10px;
`;

export const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  :hover {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;