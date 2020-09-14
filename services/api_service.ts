import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export const search = (q: string) => {
  return axios.get("/search", { params: { q } }).then((res) => res.data.data);
};
