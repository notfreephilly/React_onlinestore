import { useState } from 'react';
import DataContext from './dataContext';

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);

  function addProductToCart(prod) {
    console.log('global add');

    let cartCopy = [...cart];
    cartCopy.push(prod);
    setCart(cartCopy);

    //   setCart([...cart, prod])
  }

  function rmvProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        addProductToCart: addProductToCart,
        rmvProductFromCart: rmvProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
