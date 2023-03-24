import styled from "styled-components"

export const CartCount = styled.div `
color: black;
font-weight: bold;
font-size: 20px;
padding: 2px 5px;

`; 

export const CartItems = styled.div `
color: black;

padding: 2px 5px;

    li {
        text-decoration: none;
        font-size: 18px;
        list-style-type: none;
    }
`; 

export const ClearCartButton = styled.button`
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
