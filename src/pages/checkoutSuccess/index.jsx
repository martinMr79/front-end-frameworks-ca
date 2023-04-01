import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { SuccessPage, SuccessText, ContinueShoppingLink } from './styled';

function CheckoutSuccess() {
  return (
    <SuccessPage>
      <CheckIcon style={{ fontSize: '4rem', color: '#4caf50' }} />
      <SuccessText>
        Thank you for your purchase!<br />
        Your order has been processed successfully.
      </SuccessText>
 
       <ContinueShoppingLink to="/">Continue Shopping</ContinueShoppingLink>
  
    </SuccessPage>
  );
}

export default CheckoutSuccess;