import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Col } from 'react-bootstrap';
import './new.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';


const Donor= () => {
  const [formData, setFormData] = useState({
    "name": '',
    "contact": '',
    "age": '',
    "blood_group": '',
    "have_you_donated":'',
    "address": ''
  });

  const handleChange = (e) => {
    setFormData((old)=>({
      ...old,
      [e.target.name]:e.target.value
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:1234/send', formData);
        setFormData({
    "name": '',
    "contact": '',
    "age": '',
    "blood_group": '',
    "have_you_donated":'',
    "address": ''
        })
    } catch (error) {
      console.error(error);
      // alert(error)
    }
  };


  const cancleRequest=async(e)=>{
    setFormData({
    "name": '',
    "contact": '',
    "age": '',
    "blood_group": '',
    "have_you_donated":'',
    "address": ''
    })
  }
  return (
    <>
    <body id='body'style={{background: 'linear-gradient(to right, red,white)'}}>
      <h2>Donor Dashboard</h2>
    
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>

    
   <div id='container' className="container assistance-request-container ">
  
  <h2 className="mb-4">Donor Dashboard</h2>

  <div className='bg'>
  <form> 
    <div className="row">
      <div className="form-group col-md-6">
        <label htmlFor="name"><h4>Name</h4></label>
        <input type="text" className="form-control" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="contact"><h4>Contact</h4></label>
        <input type="text" className="form-control" placeholder="Your contact number" name="contact" value={formData.contact} onChange={handleChange} />
      </div>
    </div> 
    <div className="form-group col-md-6">
      <label><h4>Age</h4></label>
      <input className="form-control" rows={5} placeholder="Describe your needs" name="age" value={formData.age} onChange={handleChange} />
    </div>
    <div className="form-group col-md-6">
      <label><h4>Blood Group</h4></label>
      <input className="form-control" rows={5} placeholder="Describe your needs" name="blood_group" value={formData.blood_group} onChange={handleChange} />
    </div>
      <div className="form-group col-md-6">
        <label><h4>Have You Donated Previously ?</h4></label>
        <select style={{height:"55px"}} className="form-control" name="have_you_donated" value={formData.have_you_donated} onChange={handleChange}>
        <option value="">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="form-group col-md-12">
        <label><h4>Address</h4></label>
        <textarea type="text" className="form-control" placeholder="Enter Your Address" name="address" value={formData.address} onChange={handleChange} />
      </div>
      
   
    <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">
      Submit Request
    </button>
    <button type='submit' onClick={cancleRequest} className='btn btn-danger  mt-3 ml-5'>

        Cancel Request

    </button>
  </form>
  </div>
</div>

</body>
  </>
  );
};

export default Donor;