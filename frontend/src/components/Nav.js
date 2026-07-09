import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/webLogo.jfif';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const user = auth && auth !== 'undefined' ? JSON.parse(auth).name : null;
  // console.log("user in nav:", user);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <nav>
      <img src={logo} alt="logo" className="nav-logo" />
      {auth ? (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update">Update Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="nav-right"><span className="nav-user">👤 {user}</span><Link to="/signup" onClick={logout}>Logout</Link></li>
        </ul>
      ) : (
        <ul>
          <li className="nav-right"><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default Nav;
