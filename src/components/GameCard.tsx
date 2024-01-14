import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/fetchgames";
import IconComponent from "./IconComponent";
import CriticScore from "./CriticScore";
import GetproperUrl from "../hooks/image-correction";
import "../css/GameCard.css";
import GameDetailPage from "../Pages/GameDetail";
import { Link } from "react-router-dom";

interface props {
  game: Game;
  onclick: (game: Game) => void;
}
const GameCard = ({ game, onclick }: props) => {
  return (
    <Card
      overflow="hidden"
      className="card"
      onClick={() => {
        onclick(game);
      }}
    >
      <Link to={"/games/" + game.id}>
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
      </Link>
    </Card>
  );
};

export default GameCard;
