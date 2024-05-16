import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Landingpage.css';
import image1 from './blood.jpg'
import image2 from './headerimg.jpg'
import image3 from './service.jpg'
import image4 from './blood-donation.jpg'


const LandingPage = () => {
  return (

    // prompt("enter your name :");

    <div>
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"/>
              

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <span >
                <a href='/admin'role='button'><button  className='btn btn-danger'>Admin</button></a>
              </span>
        <div className="container">
        
          <a  className="navbar-brand"  href="#home"><h4 style={{marginLeft:"-100px"}}>Blood Bank</h4></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home"><h4>Home</h4></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"><h4>About</h4></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services"><h4>Services</h4></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><h4>Contact</h4></a>
              </li>
              
            </ul>
            {/* <span >
                <a href='/admin'role='button'><button  className='btn btn-danger'>Admin</button></a>
              </span> */}
          </div>
        </div>
      </nav>
      <div style={{background: 'linear-gradient(to right,#ddefbb,white)'}}></div>


      <header style={{background: 'linear-gradient(to right, red, white)',marginTop:"50px"}} id="home" className="jumbotron jumbotron-fluid text-white text-center">
        <div className="container">
          <h1 className="display-4">Donate Blood, Save Lives</h1>
          <p className="lead">Donate blood, donate life! Donate blood, save life! Donate blood, give a smile to someone. Donate blood and gift someone a precious life.</p>
          <a className="btn btn-primary btn-lg" href="/donor" role="button">Donate Now</a>
        </div>
      </header>

      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={image3} style={{height:"250px",width:"500pxpx"}} className="img-fluid" alt="Blood Donation Team" />
            </div>
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>We are a dedicated team of volunteers who are passionate about saving lives through blood donation. Our mission is to ensure a steady supply of blood to those in need, and to raise awareness about the importance of blood donation in our community.</p>
              <p>Whether you're a first-time donor or a regular contributor, we welcome you to join us in our efforts to make a difference. Together, we can help save lives and make our community a healthier, happier place for all.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: 'linear-gradient(to right, red, white)'}} id="services" className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-item text-center p-3">
                <img src={image1} alt="Donate Blood" className="img-fluid mb-3" />
                <h3>Donate Blood</h3>
                <p>Donate blood and wear your heart on your sleeve. The world needs blood, and I'm here to give. Saving lives, one donation at a time. Every blood donation is an act of love.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center p-3">
                <img src={image2} className="img-fluid mb-3" />
                <h3>Blood Testing</h3>
                <p>You may be wondering what the blood test is for today. You’re not alone! Send us a picture of your results when you get them to get a one-of-a-kind response.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item text-center p-3">
                <img src={image4} alt="Blood Transfusion" className="img-fluid mb-3" />
                <h3>Blood Transfusion</h3>
                <p>You may be wondering what the blood test is for today. You’re not alone! Send us a picture of your results when you get them to get a one-of-a-kind response.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: 'linear-gradient(to right, red, white)'}} id="contact" className="contact-section py-5">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <form className="mx-auto" style={{maxWidth: '600px'}}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 Blood Bank. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-white mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
