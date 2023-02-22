// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../components/Login';
import { AppUI } from '../components/AppUI'
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      {user ? <AppUI /> : <Login />}
    </>
  );
}

// return (
//   <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login/>} />
//         <Route path='/home' element={<AppUI/>} />
//       </Routes>
//   </BrowserRouter>
// );

export default App;
