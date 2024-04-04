import { createContext } from "react";

/* 
- Context is an interface / definition of the data
- Should have no implementations / logic
*/

const DataContext = createContext({
    cart: [],
    addProductToCart: () => { },
    rmvProductFromCart: () => {},
})
 
export default DataContext;