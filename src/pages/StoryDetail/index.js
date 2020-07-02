import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./StoryDetail.css";

import { fetchAStory, rateAStory } from "../../store/story/actions";
import { selectStory } from "../../store/story/selectors";
import { selectToken } from "../../store/user/selectors";
import StarRating from "../../components/StarRating";

export default function StoryDetail() {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const storyId = useParams().storyId;
  const story = useSelector(selectStory);

  useEffect(() => {
    dispatch(fetchAStory(storyId));
  }, [dispatch, storyId]);

  function handleRating(event) {
    event.preventDefault();
    dispatch(rateAStory(storyId, rating));
  }

  return (
    <div className="storyDetail">
      <Container className="storyContent">
        <Row>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3 className="storyTitle">{story.title}</h3>{" "}
                </Card.Title>
                <StarRating ratingAverage={story.ratingAverage} />
                <Card.Text>
                  <h6>
                    <i>Author: {story.user && story.user.name}</i>
                  </h6>

                  <div>{story.content}</div>
                </Card.Text>
              </Card.Body>{" "}
            </Card>
          </Col>
          <Col xs={6} md={4}>
            {token ? (
              <Form className="myRateForm">
                <Form.Label>Rate this story</Form.Label>
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={(event) => {
                    setRating(event.target.value);
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
                <Button
                  className="rateButton"
                  type="submit"
                  onClick={handleRating}
                >
                  Rate
                </Button>
              </Form>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
