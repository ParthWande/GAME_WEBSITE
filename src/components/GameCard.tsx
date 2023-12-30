import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/httphook";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.parent_platform.map((platformData) => (
          <Text key={platformData.platform.id}>
            {platformData.platform.name}
          </Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
