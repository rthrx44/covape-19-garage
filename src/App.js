import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing';
import Register from './pages/register/Register';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Landing/>}/> */}
        <Route path='/' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
