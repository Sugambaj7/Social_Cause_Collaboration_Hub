import axios from "axios";

const axiosURL = axios.create({
  baseURL: "http://localhost:5000/",
});

export default axiosURL;
