import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === 'kalaipriyan7777@gmail.com' && password === 'kalai@2005') {
      navigate('/adminhome');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <body style={{fontFamily:"times"}} className='col-md-12'>
    <div className='col-md-12'>

    {/* ,background: 'linear-gradient(to right, white, red)' */}
    
        <h2>Admin's Login</h2>
    <div  style={{marginLeft:"400px",marginTop:"150px"}} className='card col-md-4'>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>

      <h2 style={{paddingLeft:"150px"}} className='card card-header'>Login</h2>
      <form onSubmit={handleLogin}>
        <div  className='col-md-9 mt-5 '>
          <label>Email:</label>
          <input style={{width:"350px",height:"50px"}} className='form form-control'  type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className='col-md-9 mt-2'>
          <label>Password: </label>
          <input style={{marginBottom:"25px",width:"350px",height:"50px"}} type="password" className='form form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button style={{marginLeft:"150px",marginBottom:"25px",marginTop:"25px"}} type="submit" className='btn btn-danger  mt-2'>Login</button>
      </form>
    </div>
    
    
    </div>
   
    </body>
    );
}

export default Login;
