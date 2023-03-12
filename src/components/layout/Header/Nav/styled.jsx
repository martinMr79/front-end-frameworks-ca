import React from 'react';
import styled from 'styled-components';

export const NavStyle = styled.nav`
 
nav {
  border: 0;
  background: none;
  background-color: #311721;
  min-height: 60px;
  text-decoration: none;
  text-align: start;
  justify-content: start;
  align-items: center;
  display: flex
};

nav a {
  text-decoration: none;
  padding-left: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  color: white;
  
};

nav a:hover {
  color: #FFDAB9;
}

`

export const CartIcon = styled.div `

  div {
    text-decoration: none;
    padding-left: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    color: white;
  }

`
