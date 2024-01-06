import { SimpleGrid, Text } from "@chakra-ui/react";
import httphook, { Platform } from "../hooks/fetchgames";
import GameCard from "./GameCard";
import SkeletonCard from "./skeleton";
import { GameQuery } from "../App";

interface props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: props) => {
  const { data, error, loading } = httphook(gamequery);
  const skel = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      padding={10}
      borderRadius={10}
      spacing={4}
    >
      {loading && skel.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
