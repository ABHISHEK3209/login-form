import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLogin}) => {
    const navigate=useNavigate();

const [formData,setFormData]=useState(
    {firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",

})

const [accountType,setAccountType]=useState("student")
 const[showPassword,setShowPassword]=useState(false);
 const [showCp,setShowCp]=useState(false);

 function changeHandler(event) {
  setFormData(prevData => ({
    ...prevData,
    [event.target.name]: event.target.value
  }));
}

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLogin(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    const finalData={
      ...accountData,
      accountType
    }
    console.log(finalData);
   

    navigate("/dashboard");
  }




  return (
    <div>
        {/* student-instructor wala karna h */}
        <div className='flex p-1 gap-x-1 my-6  bg-gray-900 rounded-full max-w-max'>
        <button
        className={`${accountType==="student"
        ?
        "bg-gray-600 text-gray-300"
        :"bg-transparent text-gray-300 "}
        py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")}
        >Student</button>
        <button
  className={`${accountType==="instructor"
    ?
    "bg-gray-600 text-gray-300"
    :"bg-transparent text-gray-300 "}
    py-2 px-5 rounded-full transition-all duration-200`}

         onClick={()=>setAccountType("instructor")}
        >Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first and last name */}
           <div className='flex gap-x-4'>
           <label className='w-full'>
                <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>First Name<sup className='text-pink-500'>*</sup></p>
                <input 
                     required
                     type='text'
                     placeholder='Enter your Name'
                     name='firstName'
                     onChange={changeHandler}
                     
                     value={formData.firstName}
                     className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>Last Name<sup className='text-pink-500'>*</sup></p>
                <input
                required
                     type='text'
                     name='lastName'
                     onChange={changeHandler}
                     placeholder='Enter last Name'
                     value={formData.lastName}
                     className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
                />
            </label>
           </div>

           <label className=' w-full'>
                <p className='text-[0.875rem] text-gray-300 leading-[1.375rem] mt-2 mb-2 '>Email Address<sup className='text-pink-500'>*</sup></p>
                <input
                     required
                     type='email'
                     name='email'
                     value={formData.email}
                     onChange={changeHandler}
                     placeholder='Enter Email Address'
                     className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
                />
            </label>
          {/* create password */}

          <div className='flex gap-x-4 mt-2 mb-2'>
          <label className='relative w-full'>
                <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>Create Password<sup className='text-pink-500'>*</sup></p>
                <input
                     required
                     type={showPassword? ("text"): ("password")}
                     name='password'
                     value={formData.password}
                     onChange={changeHandler}
                     placeholder='Enter Password'
                     className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
                />
               <span
               className='absolute right-3 cursor-pointer top-[38px]'
               onClick={()=>setShowPassword((prev)=>!prev)}>{
               showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
    }
     </span> 
            </label>

            <label className='relative w-full '>
                <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] '>Confirm Password<sup>*</sup></p>
                <input
                     required
                     type={showCp? ("text"): ("password")}
                     name='confirmPassword'
                     value={formData.confirmPassword}
                     onChange={changeHandler}
                     placeholder='Confirm Password'
                     className='bg-gray-900 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-gray-200'
                />
               <span 
               className='absolute right-3 cursor-pointer top-[38px]'
               onClick={()=>setShowCp((prev)=>!prev)}>{
               showCp? 
               (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 
               (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
    }
     </span> 
            </label>
 </div>
      <button
         className='w-full bg-yellow-400 rounded-[8px] font-medium text-gray-900  px-[12px] py-[8px] mt-4  mx-w-max'
      > Create Account</button>

        </form>
  




    </div>
  )
}

export default SignupForm