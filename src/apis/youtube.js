import axios from "axios";
const KEY = "AIzaSyD-tptTid7jq9ulc_I5YJVcMbmGPKz0qoI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
    type: "video",
  },
});
