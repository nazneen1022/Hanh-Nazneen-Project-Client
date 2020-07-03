import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CommentCard.css";
export default function CommentCard(props) {
  return (
    <>
      <Container className="commentCardContainer">
        <Row>
          <Col xs={2}>
            <img
              src={props.user && props.user.imageUrl}
              alt="user-profile"
              className="userMiniImage"
            />
          </Col>
          <Col style={{ textAlign: "right", fontSize: "14px" }}>
            <em>{props.user && props.user.name}</em>
          </Col>
        </Row>
        <Row>
          <Col>{props.content}</Col>
        </Row>
      </Container>
      <br />
    </>
  );
}
