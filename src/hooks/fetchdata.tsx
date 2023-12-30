import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchGenre<T> {
    count: number;
    results:T[];
  }

const FetchData=<T,>(endpoint:string)=>{
  const [data, setData] = useState<T[]>([]);
  const [error, SetError] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    apiClient

      .get<FetchGenre<T>>(endpoint,{signal:controller.signal})
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
  }, []);
  return { data, error, loading };
};

export default FetchData
