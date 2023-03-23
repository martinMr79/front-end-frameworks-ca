import React from 'react';
import { useCart } from '../../hooks/useCart';

function CartPage() {
  const { cart, products } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, productId) => {
    const product = products.find(p => p.id === productId);
    return acc + (product ? product.price : 0);
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((productId) => {
              const product = products.find((p) => p.id === productId);
              return product ? (
                <li key={productId}>{product.name} - ${product.price}</li>
              ) : null;
            })}
          </ul>
          <p>Total price: ${totalPrice}</p>
        </>
      )}
    </div>
  );
}

export { CartPage };