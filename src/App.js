import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import ItemInfo from './pages/products/ItemInfo';
import Juice from './pages/products/Juice';
import Mods from './pages/products/Mods';
import Pods from './pages/products/Pods';
import Atomizer from './pages/products/Atomizer';
import Accessories from './pages/products/Accessories';
import Cart from './pages/cart/Cart';
import { products, topProducts } from './components/data/Data';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard topProducts={topProducts} />} />
          <Route path='/juice' element={<Juice products={products} />} />
          <Route path='/mods' element={<Mods products={products} />} />
          <Route path='/pods' element={<Pods products={products} />} />
          <Route path='/atomizer' element={<Atomizer products={products} />} />
          <Route path='/accessories' element={<Accessories products={products} />} />
          <Route path='/item' element={<ItemInfo products={products} />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
