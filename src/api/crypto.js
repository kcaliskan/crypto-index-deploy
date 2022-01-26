import axios from "axios";

export default {
  async fetchData(url, path) {
    return await axios.get(`${url}` + `${path}`);
  },
};
