import React from "react";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
export default function Home() {
  return (
    <>
      <Jumbotron>
        <img
          src={logo}
          width="350"
          height="300"
          className="d-inline-block align-top"
          alt="My-Project logo"
        />
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={6}>
            <Button>Add new Story Line</Button>
          </Col>
        </Row>

        {[
          `Today is a good day!!`,
          `The night at the Restaurant`,
          `The sky is pink`,
        ].map((line) => (
          <Row>
            <Col xs={6}>
              <Card.Body>
                <Card.Title>{line}</Card.Title>
                <Card.Link href="/CreateStory">Create a story</Card.Link>
                <Card.Link href="/StoryBoard">View all stories</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
