import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

import { fetchStoryLines } from "../../store/storyline/actions";

import logo from "../../assets/logo.jpg";
import "./Home.css";

const selectStorylines = (state) => state.storyline;

export default function Home() {
  const storylines = useSelector(selectStorylines);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoryLines());
  }, [dispatch]);

  if (!storylines) {
    return <div>{`Loading...`}</div>;
  }

  return (
    <div className="myBackground">
      <Jumbotron style={{ textAlign: "center" }}>
        <img src={logo} alt="My-Project logo" />
      </Jumbotron>
      <div className="myBackground">
        <Container>
          <Row>
            <Col xs={6}>
              <Button>Add new Story Line</Button>
            </Col>
          </Row>

          {storylines &&
            storylines.map((storyline) => (
              <Row key={storyline.id}>
                <Col xs={15}>
                  <Card.Body>
                    <Card.Title>{storyline.content}</Card.Title>
                    <Card.Link href="/CreateStory">Create a story</Card.Link>
                    <Card.Link href="/StoryBoard">View stories</Card.Link>
                  </Card.Body>
                </Col>
              </Row>
            ))}
        </Container>
      </div>
    </div>
  );
}
