import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
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
          <Card.Link href={`StoryBoard/${props.storyLineId}/${props.id}`}>
            Read detail...
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
