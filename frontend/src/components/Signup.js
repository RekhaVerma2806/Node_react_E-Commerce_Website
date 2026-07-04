import React, {useState} from 'react';
import '../App.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const collectData = (e) => {
        e.preventDefault();
        console.warn({name, email, password});
    }
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      <button className="signup-btn" onClick={collectData}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
