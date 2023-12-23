import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import {skillsdata} from "./skills.data";
const Skills = () => {
    const [items, setItems] = useState(skillsdata);

  return(
  <>
   <Container>
    {items.map((item)=>(
        <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ))}
   
   </Container>
  </>
  )
};

export default Skills;
