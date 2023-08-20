import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import products from './components/data/Data';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import ItemInfo from './components/products/ItemInfo';
import Juice from './components/products/Juice';
import Mods from './components/products/Mods';
import Pods from './components/products/Pods';
import Atomizer from './components/products/Atomizer';
import Accessories from './components/products/Accessories';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard products={products}/>}/>
        <Route path='/juice' element={<Juice products={products}/>}/>
        <Route path='/mods' element={<Mods products={products}/>}/>
        <Route path='/pods' element={<Pods products={products}/>}/>
        <Route path='/atomizer' element={<Atomizer products={products}/>}/>
        <Route path='/accessories' element={<Accessories products={products}/>}/>
        <Route path='/item' element={<ItemInfo products={products}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
