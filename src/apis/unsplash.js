import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID fpGoeSq3dGUsM0Na5gKvy2HAHvI_qQjHwDtYigbHcGA",
  },
});
