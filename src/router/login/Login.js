import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login container'>
        <h2>Login</h2>
        <div className="loginForm">
            <input type="text" placeholder='username...'/>
            <input type="text" placeholder='password...'/>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login