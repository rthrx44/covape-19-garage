import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { products, productInfo } from './components/data/Data';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import Products from './components/products/Products';
import Putingusok from './components/products/Putingusok'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard endpoint={products}/>}/>
        <Route path='dashboard/products' element={<Products/>}/>
        <Route path='dashboard/putingusok' element={<Putingusok endpoint={productInfo}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
