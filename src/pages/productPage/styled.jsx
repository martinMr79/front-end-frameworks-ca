import styled from "styled-components"

export const ProductWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  max-width: 950px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  min-height: 0;
  border-radius: 8px;
  background-color: #F8F9FA;  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

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
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-width: 100%;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    object-fit: cover;
    max-height: 850px;
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
  padding: 2rem;
  max-width: 750px;
  margin: 20px auto;
  flex: 1;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const ProductHeading = styled.h1`
  margin-bottom: 3rem;

`;

export const RatingStarsContainer = styled.div`
  margin: auto;
  color: #E8CE58;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;



export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  font-size: 1.2rem
`;

export const Price = styled.div`
  color: ${(props) => (props.isValid ? "initial" : "red")};
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
  margin-right: 10px;
`;

export const AddToCartButton = styled.button`
  
  background-color: black;
  color: white;
  font-size: 18px;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 4rem auto 0; ;
  display: block;

  :hover {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 768px) {
    margin-top: 4rem;
    
  }
`;