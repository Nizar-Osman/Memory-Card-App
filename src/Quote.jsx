import Card from "react-bootstrap/Card";

function Quote() {
  return (
    <Card className="quote">
      <Card.Header>
        (12)Chapter: Allah has one hundred Names less One{" "}
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            <strong>Narrated Abu Huraira:</strong>
            <br />
            Allah's Messenger (ﷺ) said, "Allah has ninety-nine Names,
            one-hundred less one; and he who memorized them all by heart will
            enter Paradise." To count something means to know it by heart.{" "}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Sahih al-Bukhari 7392</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Quote;
