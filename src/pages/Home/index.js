import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  fetchStoryLines,
  createNewStoryline,
} from "../../store/storyline/actions";
import { selectUser } from "../../store/user/selectors";

import logo from "../../assets/logo.jpg";
import "./Home.css";

const selectStorylines = (state) => state.storyline;

export default function Home() {
  const [show, setShow] = useState(false);
  const [storyLine, setStoryLine] = useState("");

  const user = useSelector(selectUser);
  const storylines = useSelector(selectStorylines);

  const userLoggedIn = user.token ? true : false;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoryLines());
  }, [dispatch]);

  if (!storylines) {
    return <div>{`Loading...`}</div>;
  }

  //const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleStorylineAdd = () => {
    dispatch(createNewStoryline(storyLine));
    setShow(false);
  };

  const sortedStorylines = [...storylines].sort(function (a, b) {
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    else return 0;
  });

  const renderModal = () => {
    return (
      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Story Opening Line</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="New storyline.."
              aria-label="New storyline"
              aria-describedby="basic-addon2"
              value={storyLine}
              onChange={(event) => setStoryLine(event.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleStorylineAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="myBackground">
      <Jumbotron style={{ textAlign: "center" }}>
        {user.name ? <h1>{`Welcome, ${user.name}`}</h1> : null}
        <img src={logo} alt="My-Project logo" />
      </Jumbotron>
      <div className="myBackground">
        <Container>
          <Row>
            <Col xs={6}>
              <Button
                disabled={!user.token ? true : false}
                onClick={handleShow}
              >
                Add new Story Line
              </Button>
            </Col>
          </Row>
          {renderModal()}
          {sortedStorylines &&
            sortedStorylines.map((storyline) => (
              <div key={storyline.id}>
                <Row>
                  <Col xs={25}>
                    <Card.Body>
                      <Card.Title>{storyline.content}</Card.Title>

                      {
                        <Link
                          to={
                            userLoggedIn
                              ? `/CreateStory/${storyline.id}`
                              : "/Login"
                          }
                        >
                          Create a story
                        </Link>
                      }
                      <span style={{ padding: "10px" }}> </span>
                      {
                        <Link
                          to={
                            userLoggedIn
                              ? `/StoryBoard/storyLine/${storyline.id}`
                              : "/Login"
                          }
                        >
                          View stories
                        </Link>
                      }
                    </Card.Body>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
        </Container>
      </div>
    </div>
  );
}
