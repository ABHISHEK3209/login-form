import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../component/Template'
const Signup = ({setIsLogin}) => {
  return (
    <div>

<Template
       title="Join the millions learning to code with abhishek for free"
       desc1="Build skills for today,tommorow and beyond"
       desc2="Eductaion to future-proff your carrer"
       image={signupImg}
       formtype="signup"
       setIsLogin={setIsLogin}
       /> 

    </div>
  )
}

export default Signup