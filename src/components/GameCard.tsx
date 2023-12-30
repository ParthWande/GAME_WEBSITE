import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/httphook";
import IconComponent from "./IconComponent";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <IconComponent platform={game.parent_platforms.map(p=>p.platform)}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
