import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FlashCard(props) {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Body className="card">
        <Card.Title className="card-arName">{props.arName}</Card.Title>
        <Card.Text className="card-enName"> {props.enName} </Card.Text>
        <Card.Text className="card-meaning"> {props.meaning} </Card.Text>
        <Card.Text className="card-explanation">{props.explanation} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
