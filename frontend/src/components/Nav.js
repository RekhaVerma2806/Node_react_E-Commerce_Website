import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    console.log("Logged out");
    navigate('/signup');
  }
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>{auth ? <Link to="/signup" onClick={logout}>Logout</Link> : <Link to="/signup">Signup</Link>}</li>
        <li>{auth ? <Link to="/login" onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>}</li>
      </ul>
    </nav>
  )
}

export default Nav;