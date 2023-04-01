import styled from "styled-components"

export const CartCount = styled.div `
color: black;
font-weight: bold;
font-size: 1.5rem;
padding: 2px 5px;

`; 

export const CartItems = styled.div `
color: black;


padding: 2px 5px;

    li {
        
        margin-bottom: 1rem;
        text-decoration: none;
        font-size: 18px;
        list-style-type: none;
        border: 1px solid
    }
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
