import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import PrivateRoute from './component/PrivateRoute';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
function App() {
  const [isLogIn,setIsLogin]=useState(false);
  return (
    <div className='w-screen h-screen bg-gray-950 flex flex-col '>
      <Navbar   isLogIn={isLogIn} setIsLogin={setIsLogin}/>
 <Routes>
 
 <Route path='/' element={<Home/>}/>
 <Route path='login' element={<Login setIsLogin={setIsLogin}/>}/>
 <Route path='signup' element={<Signup setIsLogin={setIsLogin}/>}/>
 <Route path='dashboard' element={

<Dashboard/>


  } />




 </Routes>
     

    </div>
  );
}

export default App;
