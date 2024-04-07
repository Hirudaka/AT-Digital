//import './App.css';
import reactbootsrap from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyApp.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';


function App() {

  const [accordionOpened, setAccordionOpened] = useState(false);

  const handleAccordionSelect = (eventKey) => {
    setAccordionOpened(eventKey !== null);
  };
  return (
    <div className="App">

      <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor: '#6A5ACD' }}>
            <div className="container-fluid">
              {/* Left side */}
              <a className="navbar-brand" href="#" style={{ color: '#FFFFFF' }}>AT Digital</a>

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



      
        <div className="container-fluid">
          <div className="hero">
          <img src="images/HeroAlone.png" className="img-fluid" alt="Hero image" style={{ width: '100%' }}/>
          <div className="overlay">
            <div className="green-container">
              <h2>We crush your competitors, goals, and sales records - without the B.S.</h2>
              <button>Get free consultation</button>
            </div>
          </div>
          </div>
        </div>


        <div classname= "containernotincss1">
          <div class="imageNtext">
            <img src="images/computer.png" alt="com Image"/>
            <div class="text-content">
              <h3>Web & Mobile App Development</h3>
              <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>

        <div classname= "containernotincss2">
          <div class="imageNtext2">
            <div class="text-content2">
              <h3>Digital Strategy Consulting</h3>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <button>LEARN MORE</button>
            </div>
            <img src="images/searchimg.png" alt="com Image"/>
          </div>
        </div>


        <div class="container">
          <div class="main-container">
          <h2 id="faq-topic" class="text-purple">Frequently Asked Questions</h2>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
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
