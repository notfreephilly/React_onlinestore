import { useState } from 'react';
import './QuantityPicker.css';

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQuantity(newVal);
  }

  function decrease() {
    let newVal = quantity - 1;
    if (newVal < 1) {
      return;
    }
    setQuantity(newVal);
  }

  return (
    <div className="qt-picker">
      <button
        className="btn btn-outline-secondary"
        disabled={quantity == 1}
        onClick={decrease}
      >
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-outline-secondary" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
