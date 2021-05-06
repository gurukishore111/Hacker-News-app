import React from "react";
import { Story } from "../Story/Story";

export const Stories = ({ storyId, job }) => {
  return storyId
    .slice(0, 15)
    .map((storyId, i) => <Story key={i} job={job} storyId={storyId} />);
};
