import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import frameImage from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Template = ({title,desc1,desc2,image,formtype,setIsLogin}) => {



  return (
    <div className='flex w-11/12 max-w-[1160px] mx-auto
    gap-x-12 gap-y-0 justify-between'>
    
        <div className='w-11/12 max-w-[450px]' >
            <h1 className='text-gray-300 
            font-semibold text-[1.875rem]  leading-[2.375rem]' x
            >{title}</h1>
            <p className=' text-[1.125rem]  leading-[1.625rem]
            mt-4'>
                <span className='text-gray-300'  >{desc1}</span>
                <br></br>
                <span className='text-blue-400 italic' >{desc2}</span>
            </p>
            {
                formtype==="signup"?
                 (<SignupForm setIsLogin={setIsLogin}/>):
                 (<LoginForm setIsLogin={setIsLogin} />)
            }
        <div className='flex w-full items-center my-4  gap-x-2'>
            <div className='w-full h-[1px] bg-gray-700'></div>
            <p className='text-gray-700 font-medium 
            leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-gray-700'></div>

        </div>
          <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-300 border border-gray-600 px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle/>
            <p>Sign Up with Google</p></button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage}
             alt='pattern'
             width={558}
             height={584}
             loading='lazy'
            />
             <img src={image}
             alt='student'
             width={558}
             height={494}
             loading='lazy'
             className='absolute -top-4 right-4'
            />
        </div>

    </div>
  )
}

export default Template