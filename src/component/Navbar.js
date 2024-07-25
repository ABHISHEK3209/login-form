import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = (props) => {
    let isLogIn=props.isLogIn;
    let setIsLogin=props.setIsLogin;



  return (
    <div className='flex justify-between items-center
    w-11/12 max-w-[116opx] py-4 mx-auto mb-20'>
   
   <Link to="/">
   <img src={logo} alt='as' width={160} height={32} loading='lazy' />
   </Link>
<nav>
<ul className='text-gray-300  flex gap-x-6'>
 <li>
    <Link to="/">Home</Link>
 </li>
 <li>
    <Link to="/">About</Link>
 </li>
 <li>
    <Link to="/">Contact</Link>
 </li>
</ul></nav>
 {/* login -signup-logout -dashborad */}
 <div className='flex  items-center gap-x-4'>
 {/* yaha condition add karna tha yisliyea bracket k use kiye */}
   {  !isLogIn && 
    <Link to="/login">
    <button className='bg-gray-900 text-gray-300 py-[8px] 
    px-[12px] rounded-[8px] border border-gray-800'
    >Login</button>
    </Link>
   }

 {   !isLogIn && 
      <Link to="/signup">
    <button  className='bg-gray-900 text-gray-300 py-[8px] 
    px-[12px] rounded-[8px] border border-gray-800'>Signup</button>
    </Link>
   }
   
   { isLogIn &&
    <Link to="/">
    <button  className='bg-gray-900 text-gray-300 py-[8px] 
    px-[12px] rounded-[8px] border border-gray-800'
    onClick={()=>{
        setIsLogin(false);
        toast.success("Logged Out");
    }}
    >  Log Out</button>
    </Link>
   }

   { isLogIn  &&
    <Link to="/dashboard">
    <button  className='bg-gray-900 text-gray-300 py-[8px] 
    px-[12px] rounded-[8px] border border-gray-800'>Dashboard</button>
    </Link>
   }


 </div>

    </div>
  )
}

export default Navbar