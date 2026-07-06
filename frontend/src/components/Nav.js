import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>{auth ? <Link to="/logout">Logout</Link> : <Link to="/signup">Signup</Link>}</li>
      </ul>
    </nav>
  )
}

export default Nav;