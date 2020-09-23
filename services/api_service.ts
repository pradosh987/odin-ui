import axios, { CancelTokenSource } from "axios";
import { Theme } from "../interfaces/Theme.interface";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ORIGIN;
axios.defaults.timeout = 10000;

export const search = (
  q: string,
  page = 1
): Promise<{ data: Theme[]; currentPage: number; totalPages: number }> => {
  return axios.get("/search", { params: { q, page } }).then((res) => res.data);
};

export const themeVisitUrl = ({ id }: Theme) =>
  `${process.env.NEXT_PUBLIC_API_ORIGIN}/visit/${id}`;

export const suggest = (q: string): [Promise<any[]>, CancelTokenSource] => {
  const source = axios.CancelToken.source();
  return [
    axios
      .get("/suggest", { params: { q }, cancelToken: source.token })
      .then((res) => res.data.data),
    source,
  ];
};

export const noImageUrl = `${process.env.NEXT_PUBLIC_CDN}/image_not_found.png`;
