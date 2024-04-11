import './Cart.css';
import { useContext, useState } from 'react';
import DataContext from '../context/dataContext';
import constants from '../common/config';
import Product from '../components/Product';

function Cart() {
  const cart = useContext(DataContext).cart;

  function getNumOfProducts() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity;
    }
    return total;
  }

  function totalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }
    return total;
  }

  function deleteItem() {}

  return (
    <div className="cart page">
      <h1>This is your cart</h1>
      <h4>We have {getNumOfProducts()} ready for you!</h4>

      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <div className="prod-cart">
              <img src={constants.IMAGE_PATH + prod.image} alt="" />
              <div>
                <h5>{prod.title}</h5>
                <label>{prod.category}</label>
              </div>
              <label>${prod.price}</label>
              <div className="cart-qty">
                <h5>Quantity</h5>
                <div className="cart-qty-selector">
                  <button>-</button>
                  <label>{prod.quantity}</label>
                  <button>+</button>
                </div>
              </div>
              <label>${prod.quantity * prod.price}</label>
              <button className="del-btn">Delete</button>
            </div>
          ))}
        </div>
        <div className="total">
          <h4>Your Total:</h4>
          <h6>${totalPrice()}</h6>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
