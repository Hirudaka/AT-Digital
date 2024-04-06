//import './App.css';
//import reactbootsrap from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6A5ACD' }}>
      <div className="container-fluid">
        {/* Left side */}
        <a className="navbar-brand" href="#" style={{ color: '#FFFFFF' }}>AT Games</a>

        {/* Right side */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#FFFFFF' }}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#FFFFFF' }}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#FFFFFF' }}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#FFFFFF' }}>Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img src="images/TopNavigation.png" className="img-fluid navbar-brand" alt="Navbar Image" style={{ width: '100%' }}/>
        </div>
        </nav>
        <div className="container-fluid">
          <img src="images/HeroSection.png" className="img-fluid" alt="Hero image" style={{ width: '100%' }}/>
        </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{ border: '1px solid red'}}>
            NavBar
          </div>
        </div>
        <div className="row">
          <div className="col-xxl" style={{ border: '1px solid red'}}>
            Column
          </div>
          <div className="col-lg" style={{ border: '1px solid red'}}>
            Column
          </div>
          <div className="col-md" style={{ border: '1px solid red'}}>
            Column
          </div>
          <div className="col" style={{ border: '1px solid red'}}>
            Column
          </div>   
        </div>
      </div>



    </div>
  );
}

export default App;
