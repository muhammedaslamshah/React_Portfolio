import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { skillsdata } from "./skills.data";
const Skills = () => {
  const [items, setItems] = useState(skillsdata);

  return (
    < >
    <h1 className="text-center pb-5">My Skills</h1>
      <Container className="d-flex flex-wrap justify-content-center">
       {items.map((item) => (
          <Card
            className="shadow p-3 mb-2 bg-body-tertiary rounded text-center d-inline-flex mx-auto"
            style={{ width: "11rem" }}
          >
            <Card.Img variant="top" src={require(`./assets/${item.image}.png`)}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Skills;
