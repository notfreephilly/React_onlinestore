
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import ShoppingList from './pages/ShoppingList';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import GlobalProvider from './context/GlobalProvider';
import Cart from './pages/Cart';

import {BrowserRouter,  Routes, Route} from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
         <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/shoppinglist' element={<ShoppingList />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>        

      <Footer />
      </div>
    </BrowserRouter>
  </GlobalProvider>
  );
}

export default App;
