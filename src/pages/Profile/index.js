import React from "react";
import { useSelector } from "react-redux";

import { Jumbotron, Image, Row, Col } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import SmallStoryCard from "../../components/SmallStoryCard";

import "./Profile.css";

export default function Profile() {
  const user = useSelector(selectUser);

  const renderStories = () => {
    return (
      <div className="myProfileBackground">
        <strong>MY STORIES</strong>
        <div>
          {user.stories &&
            user.stories.map((story) => (
              <SmallStoryCard key={story.id} {...story} />
            ))}
        </div>
      </div>
    );
  };

  if (!user || !user.stories) {
    return <div>{`Please Login to check details`}</div>;
  }

  return (
    <>
      <Jumbotron>
        <Row>
          <Col xs={4} className="myCol1">
            <Image
              src={user.imageUrl}
              alt="profile"
              width="300px"
              height="300px"
            ></Image>
          </Col>

          <Col xs={7} className="myCol2">
            <div className="row">
              <div className="col-15">
                <label>Name : </label>
              </div>
              <div className="col-75">{user.name}</div>
            </div>
            <div className="row">
              <div className="col-15">
                <label>Email Id : </label>
              </div>
              <div className="col-75">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-15">
                <label>About : </label>
              </div>
              <div className="col-75">{user.description}</div>
            </div>
          </Col>
        </Row>
      </Jumbotron>
      {renderStories()}
    </>
  );
}
