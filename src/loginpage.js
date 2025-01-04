import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';



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

    {/* <link
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    rel="stylesheet"
                // /> */}
    
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Card sx={{ width: 330, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography sx={{marginTop:"-10px"}} variant="h5" style={{fontFamily:"times"}} component="div" gutterBottom align="center">
            <b>Admin's Login</b>
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { marginBottom: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e)=>setId(e.target.value)}
              value={id}
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              // placeholder='password'
              onChange={(event)=>setPassword(event.target.value)}
              value={password}
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleLogin}
             
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
    
    </div>
   
    </body>
    );
}

export default Login;
