import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
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
    apiClient
      .get<fetchGame>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => SetError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {game.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
