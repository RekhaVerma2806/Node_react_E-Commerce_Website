import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    }, []);

    const collectData = async () => {
        // e.preventDefault();
        // console.warn({name, email, password});
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await result.json();
        // console.log(data);
        localStorage.setItem("user", JSON.stringify(data.result));
        localStorage.setItem("token", data.auth);
        if(data.result){
            navigate('/');
        }
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
