import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchData<T> {
    count: number;
    results:T[];
  }

const FetchData=<T,>(endpoint:string , RequestConfig? :AxiosRequestConfig , deps?: any[])=>{
  const [data, setData] = useState<T[]>([]);
  const [error, SetError] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    apiClient

      .get<FetchData<T>>(endpoint, {signal:controller.signal,...RequestConfig})
      .then((res) => {
        setData(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return null;
        } else return SetError(err.message);
        setloading(false);
      });
    return () => controller.abort();
  },deps ? [...deps] : []);
  return { data, error, loading };
};

export default FetchData
