import styled from 'styled-components';
import { Link } from "react-router-dom";

const SuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  
`;

const SuccessText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 20px;
`;

const ContinueShoppingLink = styled(Link)`
  color: #0077c2;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`

export { SuccessPage, SuccessText, ContinueShoppingLink };