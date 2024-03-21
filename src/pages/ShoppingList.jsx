import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
  const [list, setList] = useState(['test1', 'test2', 'test3']);

  function addItem() {
    console.log('function works');

    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push('NEW');
    setList(copy);
  }

  return (
    <div className="shoppinglist page">
      <h2>Shopping List</h2>
      <div className="box">
        <input type="text" placeholder="Create your list here" />
        <button onClick={addItem} className="btn btn-secondary btn-sm">
          +
        </button>
      </div>

      <ul>
        {list.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
