import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/slices/cartSlice';
import './Cart.css';
import { toast } from 'react-toastify';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.info('Item removed');
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.info('Cart cleared');
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-msg">🛒 Your cart is empty.</p>) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => dispatch(increaseQuantity(item.id))} className='cart-buttons'>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} className='cart-buttons' >-</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-footer">
            <h3>Total: ₹{total}</h3>
            <button className="clear-btn" onClick={handleClear}>Clear Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
