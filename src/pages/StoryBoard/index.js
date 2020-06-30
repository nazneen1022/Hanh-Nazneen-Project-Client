import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import { fetchAllStories } from "../../store/stories/actions";
import SmallStoryCard from "../../components/SmallStoryCard";
import { selectStories } from "../../store/stories/selectors";
export default function ViewStories() {
  const dispatch = useDispatch();
  const storyLineId = useParams().storyLineId;
  const stories = useSelector(selectStories);
  console.log("stories", stories);
  useEffect(() => {
    dispatch(fetchAllStories(storyLineId));
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>View All Stories</h1>
      </Jumbotron>
      {stories &&
        stories.map((story) => {
          return (
            <SmallStoryCard
              key={story.id}
              title={story.title}
              content={story.content}
              storyLineId={story.storyLineId}
              id={story.id}
            />
          );
        })}
    </>
  );
}
