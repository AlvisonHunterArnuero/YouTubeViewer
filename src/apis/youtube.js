import axios from "axios";
const KEY = "AIzaSyDGliRnvpo8pxH7_DR5VcTgCRVBzSjGfFc";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    type:"video",
    key: KEY
  }
});
