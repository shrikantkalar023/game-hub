import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0882df45d2de40eba723b402ab8e8a47",
  },
});
