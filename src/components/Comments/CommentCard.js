import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CommentCard.css";
export default function CommentCard(props) {
  console.log("props", props);
  return (
    <Container className="commentCardContainer">
      <Row>
        <Card className="commentCard">
          <Col>
            <img
              src={props.user && props.user.imageUrl}
              alt="user-profile"
              className="userMiniImage"
            />
          </Col>
          <Col>
            <Card.Body className="commentCardBody">
              <Card.Title> {props.user && props.user.name} </Card.Title>
              <Card.Text>{props.content}</Card.Text>
            </Card.Body>
          </Col>
        </Card>
      </Row>
    </Container>
  );
}
