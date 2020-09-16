import axios, { AxiosResponse, CancelToken, CancelTokenSource } from "axios";
import { Theme } from "../interfaces/Theme.interface";

axios.defaults.baseURL = "http://localhost:4000";

export const search = (q: string): Promise<{ data: Theme[] }> => {
  return axios.get("/search", { params: { q } }).then((res) => res.data);
};

export const themeVisitUrl = (themeId: number) =>
  `${process.env.NEXT_PUBLIC_API_ORIGIN}/visit/${themeId}`;

export const suggest = (q: string): [Promise<any[]>, CancelTokenSource] => {
  const source = axios.CancelToken.source();
  return [
    axios
      .get("/suggest", { params: { q }, cancelToken: source.token })
      .then((res) => res.data.data),
    source,
  ];
};
