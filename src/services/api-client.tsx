import axios, { AxiosRequestConfig } from "axios";

export interface Fetch<T> {
  count: number;
  results: T[];
}

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f6ff7ea502814ad69737566db50f2bab",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return client.get<Fetch<T>>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
