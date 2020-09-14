import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export const search = (q: string) => {
  return axios.get("/search", { params: { q } }).then((res) => res.data.data);
};

export const themeVisitUrl = (themeId: number) =>
  `${process.env.NEXT_PUBLIC_API_ORIGIN}/visit/${themeId}`;
