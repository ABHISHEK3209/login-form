import React from 'react'
import loginImg from '../assets/login.png'
import Template from '../component/Template'
const Login = ({setIsLogin}) => {

  return (
    <div>
       <Template
       title="Welcome Back"
       desc1="Build skills for today,tommorow and beyond"
       desc2="Eductaion to future-proff your carrer"
       image={loginImg}
       formtype="login"
       setIsLogin={setIsLogin}
       /> 

    </div>
  )
}

export default Login