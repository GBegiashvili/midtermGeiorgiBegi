import React from 'react'

import {useHistory} from 'react-router-dom'

import './index.css'

const SignIn = () => {
    const history = useHistory()
    const onSubmit = () => {
         fetch('https://reqres.in/api/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                email:'eve.holt@reqres.in',
                password:'cityslicka',
            })
        }).then(res => res.json()).then(result => {
            history.push('/posts')
            localStorage.setItem("token", result.token);
            })
    }

    return (
        <div className='sign-in-container'>
            <h3 className='sign-in-title'>Please sign in</h3>
            {/* <form> */}
                <div className='sign-in-input-container'>
                <input className='sign-in-input' type='email' value='eve.holt@reqres.in'  placeholder='Email address' />
                 <input className='sign-in-input' value='cityslicka' type='password'  placeholder='Password' />
                </div>
                <div className='sign-in-button-container'>
                    <button className='sign-in-button' onClick={()=>onSubmit()}>Sign in</button>
                 </div>
            {/* </form> */}
        </div>
    )
}

export default SignIn;