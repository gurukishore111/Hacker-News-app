import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getStory } from "../../services/api";
import { Card } from "../Card/Card";

export const Story = ({ storyId, job }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  return (
    <ViewBox>
      <Card story={story} job={job} />
    </ViewBox>
  );
};

const ViewBox = styled.SafeAreaView``;
