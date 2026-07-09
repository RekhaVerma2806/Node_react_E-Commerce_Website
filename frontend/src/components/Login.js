import React from 'react';
import '../App.css';

const Login = () => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const handleLogin = async () => {
        console.warn({email,password});
    }
  return (
    <div className="signup-container">
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin} className="signup-btn">Login</button>
    </div>
  );
};

export default Login;
