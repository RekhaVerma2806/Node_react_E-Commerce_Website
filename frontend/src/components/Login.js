import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
            const auth = localStorage.getItem('user');
            if(auth){
                navigate('/');
            }
        }, []);
    const handleLogin = async () => {
        console.warn({email,password});
        let result = await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result.user));
            navigate('/');
        }else{
            alert("Please enter correct details");
        }
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
