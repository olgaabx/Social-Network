import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login';
import { AppUI } from '../components/AppUI'
import { SignUp } from '../components/SignUp'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/home' element={<AppUI/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
