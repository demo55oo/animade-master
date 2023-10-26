import axios from "axios";
import config from "../config";
export default axios.create({
  baseURL:
    config.SERVER_API_URL ||
    "https://animadebackend-production.up.railway.app/api",
  headers: {
    Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
    "content-type": "application/json",
  },
});
