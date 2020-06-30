import React from "react";
import { useSelector } from "react-redux";

import { Jumbotron, Image, Row, Col } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { selectStories } from "../../store/stories/selectors";

import "./Profile.css";

export default function Profile() {
  const user = useSelector(selectUser);
  const myStories = useSelector(selectStories);
  console.log("myStories:", myStories);

  return (
    <>
      <Jumbotron>
        <Row>
          <Col>
            <Image
              src={user.imageUrl}
              alt="profile"
              width="300px"
              height="300px"
            ></Image>
          </Col>
          <Col className="myCol">
            <div className="row">
              <div className="col-25">
                <label>Name : </label>
              </div>
              <div className="col-75">{user.name}</div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Email Id : </label>
              </div>
              <div className="col-75">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>About : </label>
              </div>
              <div className="col-75">{user.description}</div>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
}
