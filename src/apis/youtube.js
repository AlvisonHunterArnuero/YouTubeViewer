import axios from "axios";
const KEY = "AIzaSyDpE1u9y4u_zeNzL2hxvif6rJxCmBHlxqI";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
