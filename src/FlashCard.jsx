import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FlashCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.arName}</Card.Title>
        <Card.Text> {props.enName} </Card.Text>
        <Card.Text> {props.meaning} </Card.Text>
        <Card.Text> {props.explanation} </Card.Text>
        <Button variant="primary">Flip</Button>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
