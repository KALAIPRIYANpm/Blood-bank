import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import { Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import Validation from "./validation";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validate = Validation(formData);
    setError(validate);

    if (Object.keys(validate).length === 0) {
      if (formData.id === "kalaipriyan7777@gmail.com" && formData.password === "Kalai@2005") {
        navigate("/adminhome");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <body style={{ fontFamily: "times" }} className="col-md-12">
      <div className="col-md-12">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <Card sx={{ width: 330, padding: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography
                sx={{ marginTop: "-10px" }}
                variant="h5"
                style={{ fontFamily: "times" }}
                component="div"
                gutterBottom
                align="center"
              >
                <b>Admin's Login</b>
              </Typography>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { marginBottom: 2 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="id"
                  onChange={handleChange}
                  value={formData.id}
                  required
                />
                {error.id && <span className="text-danger">{error.id}</span>}

                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                {error.password && <span className="text-danger">{error.password}</span>}

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
