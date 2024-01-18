import { SimpleGrid,Image } from "@chakra-ui/react";
import fetchSS from "../hooks/fetchScreenshots";

interface props{
    gameId:number;
}

const Gamess = ({gameId}:props) => {
    const {data,isLoading,error}=fetchSS(gameId)
    if (isLoading) return null;
    if (error) throw error;
  return (
    <SimpleGrid columns={{base:1,md:2}} spacing={2}>{data?.results.map(e=><Image key={e.id} src={e.image}/>)}</SimpleGrid>
  )
}

export default Gamess