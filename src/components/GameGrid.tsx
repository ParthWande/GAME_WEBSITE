import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import httphook from "../hooks/httphook";

const GameGrid = () => {
  const { game, error } = httphook();

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
