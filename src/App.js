import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { topProducts } from './components/data/Data';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard endpoint={topProducts}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
