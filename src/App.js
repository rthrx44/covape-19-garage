import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { products, topProducts } from './components/data/Data';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import Putingusok from './components/products/Putingusok';
import Products from './components/products/Products';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard endpoint={topProducts}/>}/>
        <Route path='/products' element={<Products endpoint={products}/>}/>
        <Route path='/putingusok' element={<Putingusok endpoint={products}/>}/>      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
