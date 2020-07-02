import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addComment } from "../../store/story/actions";

import "./CommentCard.css";
export default function CommentForm(props) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  function postComment() {
    dispatch(addComment(props.storyId, comment));
    setComment("");
  }
  return (
    <div>
      <Form className="commentForm">
        <Form.Control
          as="input"
          value={comment}
          placeholder="Add a comment..."
          onChange={(event) => setComment(event.target.value)}
        />
      </Form>
      <Button onClick={postComment}>Post comment</Button>
    </div>
  );
}
