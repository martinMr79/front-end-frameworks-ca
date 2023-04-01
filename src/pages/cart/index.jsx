import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartCount, CartItems, ClearCartButton } from './styled';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, products, clearCart} = useCart();
  const [cartItems, setCartItems] = useState(cart);

  // Calculate total price and quantity of each product in the cart
  const cartItemsWithQuantity = cartItems.reduce((acc, productId) => {
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
  }, {});

  // Convert object of product IDs and quantities to array of arrays
  const cartItemsArray = Object.entries(cartItemsWithQuantity);

  // Calculate total price of all items in the cart
  const totalPrice = cartItemsArray.reduce((acc, [productId, item]) => {
    return acc + item.totalPrice; 
  }, 0);

  const incrementQuantity = (productId) => {
    const newCartItems = [...cartItems];
    newCartItems.push(productId);
    setCartItems(newCartItems);
  }

  const decrementQuantity = (productId) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.indexOf(productId);
    if (index > -1) {
      newCartItems.splice(index, 1);
    }
    setCartItems(newCartItems);
  }

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
      <img src={item.product.imageUrl} alt={item.product.title} />
      <div>
        <div>
          {item.product.title}
        </div>
        <div>
          Unit price: kr {item.product.price.toFixed(2)}
        </div>
        <div>
          Total: kr {(item.totalPrice).toFixed(2)}
        </div>
        <div>
          Qty: 
          <span className="quantity">{item.quantity}</span>
          <button className="quantity-btn" onClick={() => incrementQuantity(productId)}>+</button>
          <button className="quantity-btn" onClick={() => decrementQuantity(productId)}>-</button>
        </div>
      </div>
    </li>
  ))}
</ul>
          </CartItems>
          <CartCount>
            <p>Total price: kr {totalPrice.toFixed(2)}</p>
          </CartCount>
          <Link to="/CheckoutSuccess">
            <ClearCartButton onClick={clearCart}>
              Checkout
            </ClearCartButton>
          </Link>
        </>
      )}
    </div>
  );
}

export { CartPage };