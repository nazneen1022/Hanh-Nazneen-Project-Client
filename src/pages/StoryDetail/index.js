import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./StoryDetail.css";

import {
  fetchAStory,
  rateAStory,
  fetchCommentsOfAStory,
} from "../../store/story/actions";
import { selectStory } from "../../store/story/selectors";
import { selectToken } from "../../store/user/selectors";
import StarRating from "../../components/StarRating";
import CommentCard from "../../components/Comments/CommentCard";

export default function StoryDetail() {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const storyId = useParams().storyId;
  const story = useSelector(selectStory).story;
  const comments = useSelector(selectStory).comments;
  console.log("comments", comments);

  useEffect(() => {
    dispatch(fetchAStory(storyId));
    dispatch(fetchCommentsOfAStory(storyId));
  }, [dispatch, storyId]);

  function handleRating(event) {
    event.preventDefault();
    dispatch(rateAStory(storyId, rating));
  }

  return (
    <div className="storyDetail">
      <Container className="storyContent">
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3 className="storyTitle">{story.title}</h3>{" "}
                  <StarRating ratingAverage={story.ratingAverage} />
                  <i>
                    <h6>Author: {story.user && story.user.name}</h6>
                  </i>
                </Card.Title>
                <Card.Img src={`${story.imageUrl}`} alt="story-image" />
                <Card.Text className="storyContent">{story.content}</Card.Text>
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
            {comments &&
              comments.map((comment) => {
                return <CommentCard {...comment} />;
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
