import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import fetchdecs from "../hooks/fetchdescription";
import httphook from "../hooks/fetchgames";
import { GameQuery } from "./HomePage";

interface props {
  gamequery: GameQuery;
  
}


const GameDetailPage = ({gamequery}: props) => {
  const {id} = useParams();
  const param = parseInt(id!);
  const { data, error, loading } = httphook(gamequery);

  return(
    <Heading>{gamequery.game?.id}</Heading>
  )
  
};

export default GameDetailPage;
