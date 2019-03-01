import axios from "axios";

const KEY = "AIzaSyAXWARnAcX5syf3EVE9JfgFib9LdXpv7Xk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
