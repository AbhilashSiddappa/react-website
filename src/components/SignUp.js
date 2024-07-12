import React, { useRef, useState } from 'react'
import { formValidate } from '../utils/Validate';

function SignUp() {
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const [signIn ,setSignIn] =useState(true);
  function validate(e){
    e.preventDefault();
    formValidate(email.current.value,password.current.value)
  }
function handleSignIn(e){
     e.preventDefault();
    setSignIn(!signIn)
    // console.log(email.current.value,password.current.value,name.current.value)
}
    
  return (
    <div className='signup-outer'>
        <div className='page-center'>
            <div className='signup-inner'>
                <div className='form-outer'>
                    <div className='form-title'><h2>{signIn?"Sign In":"Sign Up"}</h2></div>
                    <form>
                        {!signIn && <div className='name'>
                        <input ref={name} placeholder='Name'/>
                       </div>}
                       
                       <div className='email'>
                        <input ref={email} type='email' placeholder='Email'/>
                       </div>
                       <div className='passowrd'>
                        <input ref={password} type='password' placeholder='Password'/>
                       </div>
                       <div className='btn'><button onClick={validate}>{signIn?"Sign In":"Sign Up"}</button></div>
                    </form>

                    <div className='paragraph'><h4 onClick={handleSignIn}>{signIn?"Are you new customer? Sign Up":"Already a Customer ? Sign In"}</h4></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp