import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/httphook";
import IconComponent from "./IconComponent";
import CriticScore from "./CriticScore";
import GetproperUrl from "../hooks/image-correction";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card width = '350px' overflow="hidden">
      <Image src={GetproperUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <IconComponent
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
