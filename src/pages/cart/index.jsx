import React from 'react';
import { useCart,  } from '../../hooks/useCart';
import { CartCount, CartItems } from './styled';

function CartPage() {
  const { cart, products, clearCart } = useCart();

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
        <CartItems>
          <ul>
            {cart.map((productId) => {
              const product = products.find((p) => p.id === productId);
              return product ? (
                <li key={productId}>{product.title} - {product.discountedPrice && <span>kr {product.discountedPrice}</span>}
                {!product.discountedPrice && <span>kr {product.price}</span>}</li>
              ) : null;
            })}
          </ul>
          </CartItems>
          <CartCount>
          <p>Total price: kr {totalPrice}</p>
          </CartCount>
          <button onClick={clearCart}>CLEAR CART</button>
        </>
      )}
    </div>
  );
}

export { CartPage };