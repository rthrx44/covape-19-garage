import './styles/Modern-normalize.css';
import './styles/App.css';
import './styles/Utils.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Landing/>}/>
        <Route path='/about' element={<Landing/>}/>
        <Route path='/contact' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
