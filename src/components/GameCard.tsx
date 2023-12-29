import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/httphook";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow='hidden'>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Text fontSize='2xl'>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
