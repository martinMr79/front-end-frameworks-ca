import React from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import { SuccessPage, SuccessText } from './styled';

function CheckoutSuccess() {
  return (
    <SuccessPage>
      <CheckIcon style={{ fontSize: '4rem', color: '#4caf50' }} />
      <SuccessText>
        Thank you for your purchase!<br />
        Your order has been processed successfully.
      </SuccessText>
      <Link to="/">
        Continue shopping
      </Link>
    </SuccessPage>
  );
}

export default CheckoutSuccess;