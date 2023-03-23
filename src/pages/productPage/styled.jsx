import styled from "styled-components"

export const ProductWrapper = styled.div `

border: 1px solid black; 
display: flex;
flex-direction: column;
max-width: 750px; 
`; 


export const ProductHeading = styled.h3 ``;    
     
export const ProductImageContainer = styled.div `
    display: flex; 
    justify-content: center;
    align-items: center;  
   
`;

export const ProductImage = styled.img`
    height: 100% 
    width: 100%
    object-fit: contain;
`; 

export const RatingStarsContainer = styled.div``; 

export const PricesContainer = styled.div`
display: flex; 
justify-content: space-between; 
padding: 5px 
`; 

export const Price = styled.div `
    color: ${(props) => (props.isValid ? "initial" : "red")};  
    text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};  

`;


export const AddToCartButton = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
 :hover {
    background-color: white;
    color: black;
 }
`