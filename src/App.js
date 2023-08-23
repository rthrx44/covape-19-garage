import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import JuiceInfo from './pages/products/juice/JuiceInfo';
import Juice from './pages/products/juice/Juice';
import Mods from './pages/products/Mods';
import Pods from './pages/products/Pods';
import Atomizer from './pages/products/Atomizer';
import Accessories from './pages/products/Accessories';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/juice' element={<Juice/>}/>
        <Route path='/mods' element={<Mods/>}/>
        <Route path='/pods' element={<Pods/>}/>
        <Route path='/atomizer' element={<Atomizer/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/item' element={<JuiceInfo />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
