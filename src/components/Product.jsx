import './Product.css';
import QuantityPicker from './QuantityPicker';
import constants from '../common/config';
import { useState, useContext } from 'react';

import DataContext from '../context/dataContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  let addProductToCart = useContext(DataContext).addProductToCart;

  function add() {
    let prod = { ...props.info };
    prod.quantity = quantity;

    addProductToCart(prod);

    console.log(props.info);
    console.log(prod);
  }

  function quantityChanged(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} />
      <h6>{props.info.title}</h6>
      <label className="price">
        <b>Price:</b> ${props.info.price.toFixed(2)}
      </label>
      <label className="total">
        <b>Total:</b> ${getTotal(' ')}
        {''}
      </label>

      <div className="controls">
        <QuantityPicker onChange={quantityChanged} />

        <button onClick={add} className="btn btn-outline-dark">
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
