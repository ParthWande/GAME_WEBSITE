import { useParams } from "react-router-dom";
import UseGame from "../hooks/UseGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExtendedText from "../components/ExtendedText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import Trailer from "../components/Trailer";
import Gamess from "../components/Gamess";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = UseGame(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={4}>
      <GridItem>
        <Heading>{data?.name}</Heading>
        {data?.description_raw && (
          <ExtendedText>{data.description_raw}</ExtendedText>
        )}
        <SimpleGrid columns={2}>
          <DefinitionItem term="Platforms">
            {data?.parent_platforms.map((p) => (
              <Text key={p.platform.id}>{p.platform.name}</Text>
            ))}
          </DefinitionItem>
          {data?.metacritic && (
            <DefinitionItem term="Critic Score">
              <CriticScore score={data?.metacritic} />
            </DefinitionItem>
          )}
          <DefinitionItem term="Genres">
            {data?.genres.map((e) => (
              <Text key={e.id}>{e.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Publishers">
            {data?.publishers.map((e) => (
              <Text key={e.id}>{e.name}</Text>
            ))}
          </DefinitionItem>
        </SimpleGrid>
      </GridItem>
      <GridItem>
        {data?.id && <Trailer gameId={data?.id} />}
        {data?.id && <Gamess gameId={data?.id} />}
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetail;
