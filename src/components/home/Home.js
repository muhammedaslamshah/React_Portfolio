import React from 'react';

import {Button,Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';


const Home = () => {
  return (
    <>
    <Container>
        <div className='left-sec'>
            <h1>Muhammed Aslam Shah S</h1>
            <p><span>Full-Stack</span>Software Engineer & Entrepreneur</p>
            <Button>
              <a href='https://www.instagram.com/muhammed_aslam_shah_s/'>Contact Us</a>
            </Button>
        </div>
        <div className='right-sec'>
          <div>
            <img id="home-img" src="./Assets/home.png" alt="home-img" width="200px"/>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Home