import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="vh-100 d-flex flex-wrap justify-content-between pt-5">
        <div className="left-sec text-lefy">
          <h1 className="pt-5">Muhammed Aslam Shah S</h1>
          <h3 className="pt-3 pb-3">
            <span>Full-Stack</span>Software Engineer & Entrepreneur <br />{" "}
            Founders and CEO of Newwesterlund <br/> Karunagappally, Kerala, India{" "}
          </h3>
          <p className="pb-3">
          "Success is walking from failure to failure with no loss of enthusiasm."
          </p>
          <Button className="bg-primary text-white p-3" style={{backgroundColor: 'black !important'}}>
            <a href="https://www.instagram.com/muhammed_aslam_shah_s/">
              Contact Us
            </a>
          </Button>
        </div>
        <div className="right-sec pt-5">
          <div>
            <img
              id="home-img"
              src={require(`./assets/home.png`)}
              alt="home-img"
              class="img-fluid"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
