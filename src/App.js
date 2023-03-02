import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import CartProvider from './Context/CartProvider';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
          <Route path='category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
