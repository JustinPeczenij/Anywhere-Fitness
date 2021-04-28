import React from 'react';
import { Link } from 'react-router-dom'

//Building Header Component
export default function Header() {
  return (
    <div className="header">
      <h1>Anywhere Fitness 💪</h1>


      <div className='login-button'>
          <Link to='/login'>
            <button>Login</button>
          </Link>
      </div>
      <div className='signup-button'>
          <Link to='/signup'>
            <button>Sign-Up</button>
          </Link>
      </div>
      <div className='home-button'>
          <Link to='/'>
            <button>Home</button>
          </Link>
      </div>
    </div>
  );
}
