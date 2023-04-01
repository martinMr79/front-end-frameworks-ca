import styled from "styled-components"


export const CartCount = styled.div `
color: black;
font-weight: bold;
font-size: 1.5rem;
padding: 2px 5px;

`; 

export const CartItems = styled.div`
  color: black;
  padding: 2px 5px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;
    font-size: 18px;
    list-style-type: none;
    border: 1px solid;
    width: 600px;
    
  }

  img {
    height: 80px;
    margin-right: 1rem;
  }


  .price {
    margin-left: auto;
    padding-right 5px;
  }

  @media (max-width: 768px) {
    li {
      flex-direction: column;
      align-items: flex-start;
      max-width: 280px; 
      
    }
    img {
      margin-bottom: 10px;
    }

    .price {
        margin-left: 5px;
        
      }
    

  }

`;

export const QuantityButton = styled.button`
  background-color: #eee;
  border: none;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;


export const ClearCartButton = styled.button`
background-color: black;
color: white;
font-size: 1rem;
padding: 10px 30px;
border-radius: 5px;
margin: 30px 0px;
cursor: pointer;
 :hover {
    background-color: red;
    color: white;
 }
`

