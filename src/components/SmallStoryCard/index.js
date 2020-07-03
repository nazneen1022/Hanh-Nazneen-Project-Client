import React from "react";
import "./style.css";
import moment from "moment";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function SmallStoryCard(props) {
  return (
    <Container>
      <Card className="smallStoryCard">
        <Card.Body className="smallStoryCardBody">
          <Card.Title className="smallStoryCardTitle">
            <Row>
              <Col>
                <strong>{props.title}</strong>
              </Col>
              <Col style={{ textAlign: "right", fontSize: "14px" }}>
                <i>Posted on: {moment(props.createdAt).format("DD-MM-YYYY")}</i>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <i>Author: {props.user && props.user.name}</i>
          </Card.Text>
          <Card.Text>{props.content}</Card.Text>
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
