import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, MenuItem, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import './new.css';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: 'auto',
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  textTransform: "none",
  borderRadius: "8px",
}));

const Donor = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    age: '',
    blood_group: '',
    have_you_donated: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData((old) => ({
      ...old,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1234/send', formData);
      setFormData({
        name: '',
        contact: '',
        age: '',
        blood_group: '',
        have_you_donated: '',
        address: ''
      });
    } catch (error) {
      console.error("Axios error:", error.response?.data || error.message);
      console.error("Error occurred: " + (error.response?.data?.error || error.message));
    }
  };

  const cancelRequest = () => {
    setFormData({
      name: '',
      contact: '',
      age: '',
      blood_group: '',
      have_you_donated: '',
      address: ''
    });
  };

  return (
    <Container maxWidth="sm" className="donor-container">
      <StyledCard>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Donor Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Contact" name="contact" value={formData.contact} onChange={handleChange} margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth type="number" label="Age" name="age" value={formData.age} onChange={handleChange} margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Blood Group" name="blood_group" value={formData.blood_group} onChange={handleChange} margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Have You Donated Previously?"
                  name="have_you_donated"
                  value={formData.have_you_donated}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                >
                  <MenuItem value="">--</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Address" name="address" value={formData.address} onChange={handleChange} margin="normal" variant="outlined" />
              </Grid>
              <Grid item xs={12} container spacing={2} justifyContent="center">
                <Grid item>
                  <StyledButton type="submit" variant="contained" color="primary">Submit Request</StyledButton>
                </Grid>
                <Grid item>
                  <StyledButton variant="contained" color="secondary" onClick={cancelRequest}>Cancel Request</StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Donor;
