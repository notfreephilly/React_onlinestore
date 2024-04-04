import './Cart.css';
import { useContext } from 'react';
import DataContext from '../context/dataContext';

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

  return (
    <div className="cart page">
      <h1>This is your cart</h1>
      <h4>We have {getNumOfProducts()} ready for you!</h4>
    </div>
  );
}

export default Cart;
