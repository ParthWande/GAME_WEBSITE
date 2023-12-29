import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const httphook = () => {
  interface Game {
    id: number;
    name: string;
  }
  interface fetchGame {
    count: number;
    results: Game[];
  }
  const [game, setGame] = useState<Game[]>([]);
  const [error, SetError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<fetchGame>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError){return null;}
        else return SetError(err.message)
      });
    return ()=> controller.abort();
  },[]);
  return { game, error };
};

export default httphook;
