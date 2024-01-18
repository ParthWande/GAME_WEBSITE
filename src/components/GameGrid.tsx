import { SimpleGrid, Text } from "@chakra-ui/react";
import httphook from "../hooks/fetchgames";
import GameCard from "./GameCard";
import SkeletonCard from "./skeleton";

const GameGrid = () => {
  const {data,error,isLoading} = httphook();
  const skel = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      padding={10}
      borderRadius={10}
      spacing={4}
    >
      {isLoading && skel.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
