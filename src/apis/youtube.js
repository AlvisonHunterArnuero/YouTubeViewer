import axios from "axios";
const KEY = "AIzaSyBKQYvk7DtV12DNYassq8RjZgTZ7lpSoA8";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    type: "video",
    key: KEY,
  },
});
