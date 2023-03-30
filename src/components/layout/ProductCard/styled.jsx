import styled from 'styled-components';

export const CardContainer = styled.div` 
max-width: 1500px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto 6rem;

`;


export const ProductPrice = styled.div `
    color: ${(props) => (props.isValid ? "initial" : "#F01211")};
    text-decoration: ${(props) => (props.isDiscounted ? "line-through" : "none")};
    
    span {
      color: ${(props) => (props.isDiscounted ? "red" : "black")};
    }
`;


export const DiscountInfo = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;


export const ProductCards = styled.div`

div {
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
`;

export const ProductCard = styled.div`
  
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  gap: 0.5rem;

@media (min-width: 640px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (min-width: 1280px) {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

  
} 

`;

export const ProductImage = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  margin: 1.5rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


export const ProductDescription = styled.p`
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
