/*
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 *
 * are usually exported
 */

import './Navbar.css';

function Navbar() {
  return (
    <div className="heading">
      <div>
        <h1>REFLEX</h1>
        <p>Show your pump</p>
      </div>
    </div>
  );
}

export default Navbar;
