import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/fetchgames";
import IconComponent from "./IconComponent";
import CriticScore from "./CriticScore";
import GetproperUrl from "../hooks/image-correction";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow="hidden" >
      <Image src={GetproperUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <IconComponent
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
