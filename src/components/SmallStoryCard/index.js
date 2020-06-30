import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function SmallStoryCard(props) {
  return (
    <Container>
      <Card className="smallStoryCard">
        <Card.Body className="smallStoryCardBody">
          <Card.Title className="smallStoryCardTitle">
            {" "}
            {props.title}
          </Card.Title>
          {props.content}
          <br />
          <Card.Link
            className="smallStoryCardLink"
            href={`/StoryBoard/${props.id}`}
          >
            Read detail...
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
