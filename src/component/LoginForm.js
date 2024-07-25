import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({setIsLogin}) => {

    const navigate=useNavigate(); 

 const [formData,setFormData]=useState({email:"", password:""});

 const [showPassword,setShowPassword]=useState(false);

 function changeHandler(event) {
  setFormData(prevData => ({
    ...prevData,
    [event.target.name]: event.target.value
  }));
}
 function submitHandler(event)
 {
    event.preventDefault();
    setIsLogin(true);
    toast.success("logged in")
    navigate("/dashboard")
 }
  return (
    <div>
  <form onSubmit={submitHandler}
  className='flex flex-col w-full gap-y-4 mt-6 '>
  <label className='w-full'>
    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
        Email address <sup>*</sup>
    </p>
    <input
        required
        type='email'
        value={formData.email}
        placeholder='Enter your Email'
        onChange={changeHandler}
        name='email'
        className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
    />
     </label>

     <label className='w-full relative'>
    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>
        Password <sup>*</sup>
    </p>
    <input
        required
        type={showPassword? ("text"):("password")}
        value={formData.password}
        placeholder='Enter Password'
        onChange={changeHandler}
        name='password'
        className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
     />
     <span 
      className='absolute right-3 cursor-pointer top-[38px]'
     onClick={()=>setShowPassword((prev)=>!prev)}>{
     showPassword?
     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
      (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
    }
     </span>
     <Link ro="#">
     <p className='text-xs mt-1 text-blue-600 max-w-max ml-auto'>
        Forget Password</p></Link>
 </label>

<button
  className='bg-yellow-400 rounded-[8px] font-medium text-gray-900  px-[12px] py-[8px] mt-4'
>
    Sign In
</button>



  </form>
    </div>
  )
}

export default LoginForm