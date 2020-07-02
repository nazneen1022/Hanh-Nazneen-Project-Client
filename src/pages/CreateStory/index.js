import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Button, Form, Col, Image } from "react-bootstrap";
import { createMyStory } from "../../store/story/actions";
import { selectStorylines } from "../../store/storyline/selectors";
import { selectStory } from "../../store/story/selectors";

import "./createstory.css";

import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const recognition = new SpeechRecognition();

recognition.continous = true;

recognition.lang = "en-US";

const options = {
  autoStart: false,
};

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const CreateStory = ({
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  const [title, setTitle] = useState("");
  const [myStory, setMyStory] = useState("");
  const [imageUrl, setMyImageUrl] = useState(
    "https://5gems.files.wordpress.com/2014/05/134170985_istockphoto_thinkstock1.jpg"
  );

  const [storyCreated, setStoryCreated] = useState(false);

  const { storyLineId } = useParams();

  const dispatch = useDispatch();
  const storylines = useSelector(selectStorylines);
  const newStory = useSelector(selectStory);

  let storyline;

  if (storylines) {
    storyline = [...storylines].find(
      (storyline) => storyline.id === parseInt(storyLineId)
    ).content;
  }

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(
      createMyStory(storyLineId, title, `${storyline} ${myStory}`, imageUrl)
    );
    setStoryCreated(true);
  };

  return (
    <div style={{ backgroundColor: "#e0ebeb" }}>
      <Jumbotron>
        <h2>Create New Story</h2>
        <br />
        <h5>Adding your story to the opening line </h5>
      </Jumbotron>
      <Form className="myForm" onSubmit={submitForm}>
        <Form.Group>
          <Form.Row>
            <Col xs={7}>
              <Form.Control
                size="md"
                type="text"
                placeholder="Title of your story.."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col xs={10}>
              <Form.Control
                readOnly
                size="md"
                as={"textarea"}
                placeholder={storyline}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col xs={10}>
              <Form.Control
                size="md"
                as="textarea"
                rows="10"
                placeholder="Your story..."
                value={myStory || transcript}
                onChange={(event) => setMyStory(event.target.value)}
                required
              />
            </Col>
          </Form.Row>
          <br />

          <Form.Row>
            <Col xs={10}>
              <Form.Control
                type="text"
                name="imageUrl"
                onChange={(event) => setMyImageUrl(event.target.value)}
                value={imageUrl}
                placeholder="Enter image url here.."
              />

              <Form.Text className="text-muted">
                {`You can give some image url describing your story or will be defaulted with this image`}
              </Form.Text>
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col xs={4} style={{ paddingTop: "100px" }}>
              <Button variant="primary" type="submit">
                Post my story
              </Button>
              {storyCreated && newStory && (
                <Link to={`/StoryBoard/${newStory.id}`}>
                  <div
                    style={{
                      display: "inline",
                      postion: "relative",
                      padding: "20px",
                    }}
                  >
                    View story
                  </div>
                </Link>
              )}
            </Col>
            <Col xs={5}>
              {imageUrl && <Image src={imageUrl} alt="preview" thumbnail />}
            </Col>
          </Form.Row>
        </Form.Group>

        <br />
      </Form>
    </div>
  );
};
CreateStory.propTypes = propTypes;

export default SpeechRecognition(options)(CreateStory);
