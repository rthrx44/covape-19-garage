import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
