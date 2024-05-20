import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

function FlashCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card style={{ width: "14rem" }}>
      <Card.Body className="card">
        <Card.Title className="card-arName">{props.arName}</Card.Title>
        <Card.Text className="card-enName">{props.enName}</Card.Text>
        <Card.Text className="card-meaning">
          {isFlipped && props.meaning}
        </Card.Text>
        <Card.Text className="card-explanation">
          {isFlipped && props.explanation}
        </Card.Text>
        <Button onClick={flipHandler} variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
