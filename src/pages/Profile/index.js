import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Jumbotron, Image, Row, Col } from "react-bootstrap";
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";
import SmallStoryCard from "../../components/SmallStoryCard";

import "./Profile.css";

export default function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const renderStories = () => {
    let sortedStories;
    if (user.stories) {
      sortedStories = [...user.stories].sort(function (a, b) {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
        else return 0;
      });
    }
    return (
      <div className="myProfileBackground">
        <strong>MY STORIES</strong>
        <div>
          {sortedStories &&
            sortedStories.map((story) => (
              <SmallStoryCard key={story.id} user={user} {...story} />
            ))}
        </div>
      </div>
    );
  };

  if (!user) {
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
                <label className="mylabel">Name : </label>
              </div>
              <div className="col-75">{user.name}</div>
            </div>
            <div className="row">
              <div className="col-15">
                <label className="mylabel">Email Id : </label>
              </div>
              <div className="col-75">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-15">
                <label className="mylabel">About : </label>
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
