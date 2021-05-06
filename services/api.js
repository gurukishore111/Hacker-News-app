import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const newStoriesUrl = `${baseUrl}/showstories.json`;
export const hotStoriesUrl = `${baseUrl}/topstories.json`;
export const jobStoriesUrl = `${baseUrl}/jobstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStories = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getComment = async (commentId) => {
  try {
    const res = await axios
      .get(`${itemUrl + commentId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const gethotStories = async () => {
  try {
    const res = await axios.get(hotStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const gethotStory = async (hotstoryId) => {
  try {
    const res = await axios
      .get(`${itemUrl + hotstoryId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getJobStories = async () => {
  try {
    const res = await axios.get(jobStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getJobStory = async (hotJobId) => {
  try {
    const res = await axios
      .get(`${itemUrl + hotJobId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};
