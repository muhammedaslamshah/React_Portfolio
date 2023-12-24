import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { footerdata } from "./footer.data";
const Footer = () => {
  const [items] = useState(footerdata);
  return (
    <div className="bg-dark pt-3 pb-3 mb-0">
      <Container className="d-flex flex-wrap justify-content-center">
        {items.map((item) => (
          <a href={item.link} class="me-4 text-reset">
            <img
              style={{ width: "1.5rem" }}
              src={require(`./assets/${item.image}.png`)}
            />
          </a>
        ))}
      </Container>
      <br />
      <p className="text-center" style={{ color: "white" }}>
        Design & Developed by Muhammed Aslam Shah S © 2023 All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
