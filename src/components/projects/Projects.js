import React, { useState } from "react";
import "./style.css";
import { Container, Card } from "react-bootstrap";
import { projectsdata } from "./projects.data";
const Projects = () => {
  const [items] = useState(projectsdata);
  return (
    <div id="project">
      <Container>
        <h1 className="text-center pt-5 pb-5">My Projects</h1>
        <Container className="d-flex flex-wrap justify-content-center">
          {items.map((item) => (
            <Card
              className="shadow p-3 mb-2 bg-body-tertiary rounded text-center d-inline-flex mx-auto"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={require(`./assets/${item.image}.png`)}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
              <a href={item.links} className="pointer-hover txt-dec-non">
                Click here
              </a>
            </Card>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default Projects;
