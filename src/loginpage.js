import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

// Validation function
const validateInputs = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState("");
  const navigate = useNavigate();

  // Handle form inputs
  const handleInputs = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateInputs(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make the API call to the backend
        const response = await axios.post("http://localhost:1234/login", values);
        console.log(response.data);

        // Show success message and navigate to the dashboard
        setApiMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/adminhome"), 2000); // Adjust path as needed
      } catch (err) {
        console.error("API Error:", err.message);
        setApiMessage(
          err.response?.data?.message || "An error occurred during login."
        );
      }
    } else {
      setApiMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", padding: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Admin's Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputs}
              value={values.email}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleInputs}
              value={values.password}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </form>
          {apiMessage && (
            <Alert
              severity={apiMessage.includes("successful") ? "success" : "error"}
              sx={{ marginTop: 2 }}
            >
              {apiMessage}
            </Alert>
          )}
          <Box textAlign="center" sx={{ marginTop: 2 }}>
            <Button
              onClick={() => navigate("/signup")}
              color="primary"
              variant="text"
            >
              Don't have an account? Signup here.
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;