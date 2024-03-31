import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  function addItem() {
    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push(text);
    setList(copy);
    setText('');
  }

  function handleTextChange(e) {
    const val = e.target.value;
    setText(val);
  }

  /*
   * create a button
   * when the user click call a fun (deleteAll)
   *deleteAll should clear the list array  (set an  empty array to it)
   */

  function deleteAll() {
    console.log('deleting...');
    setList([]);
  }

  return (
    <div className="shopping-list page">
      <h2>Shopping List</h2>
      <div className="box">
        <input
          onChange={handleTextChange}
          value={text}
          type="text"
          placeholder="Create your list here"
        />
        <button onClick={addItem} className="btn btn-secondary btn-sm">
          Add
        </button>
        <button onClick={deleteAll} className="btn btn-sm btn-danger">
          Clear
        </button>
      </div>

      <ul className="list-result">
        {list.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
