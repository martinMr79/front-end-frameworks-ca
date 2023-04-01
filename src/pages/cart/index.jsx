import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartCount, CartItems, ClearCartButton } from './styled';


/**
 * 
 * @returns Calculate total price and quantity of each product in the cart
 */
function CartPage() {
  const { cart, products, clearCart } = useCart();

  // Calculate total price and quantity of each product in the cart
  const [cartItems, setCartItems] = useState(cart.reduce((acc, productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      if (acc[productId]) {
        // Product already exists in cart, increment quantity and total price
        acc[productId].quantity++;
        acc[productId].totalPrice += product.price;
      } else {
        // Product doesn't exist in cart yet, add it with initial quantity and total price
        acc[productId] = {
          product,
          quantity: 1,
          totalPrice: product.price,
        };
      }
    }
    return acc;
  }, {}));

  // Convert object of product IDs and quantities to array of arrays
  const cartItemsArray = Object.entries(cartItems);

  // Calculate total price of all items in the cart
  const totalPrice = cartItemsArray.reduce((acc, [productId, item]) => {
    return acc + item.totalPrice; 
  }, 0);

  // Function to handle incrementing the quantity of an item in the cart
  const handleIncrement = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[productId].quantity++;
      updatedCartItems[productId].totalPrice += updatedCartItems[productId].product.price;
      return updatedCartItems;
    });
  };

  // Function to handle decrementing the quantity of an item in the cart
  const handleDecrement = (productId) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId].quantity === 1) {
        delete updatedCartItems[productId];
      } else {
        updatedCartItems[productId].quantity--;
        updatedCartItems[productId].totalPrice -= updatedCartItems[productId].product.price;
      }
      return updatedCartItems;
    });
  };

  return (
    <div>
      <h1>Cart</h1>
    
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <CartItems>
            <ul>
              {cartItemsArray.map(([productId, item]) => (
                <li key={productId}>
                  <img src={item.imageUrl} alt={item.title} />
                  <div>
                    <div>{item.product.title}</div>
                    <div>
                      <button onClick={() => handleDecrement(productId)}>-</button>
                      {item.quantity}
                      <button onClick={() => handleIncrement(productId)}>+</button>
                    </div>
                    <div>
                      Unit price: kr {item.product.price.toFixed(2)}
                    </div>
                    <div>
                      Total: kr {(item.totalPrice).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CartItems>
          <CartCount>
            <p>Total price: kr {totalPrice.toFixed(2)}</p>
          </CartCount>
          <ClearCartButton onClick={clearCart}>CLEAR CART</ClearCartButton>
        </>
      )}
    </div>
  );
}

export { CartPage };