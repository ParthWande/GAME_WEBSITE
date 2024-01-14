import FetchGenre, { Genre } from "../hooks/genrehook";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import GetproperUrl from "../hooks/image-correction";
import SkeletonGenre from "./skeleton_genre";
interface props {
  onselectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectedGenre, selectedGenre }: props) => {
  const { data, isLoading } = FetchGenre();
  const skel = [1, 2, 3, 4, 5, 6];
  return (
    <>
    <Heading fontSize={'2xl'} paddingLeft={10} marginTop={8}>Genres</Heading>
    <Box padding={8}>
      <List>
        {isLoading && skel.map((sk) => <SkeletonGenre key={sk} />)}
        {data?.results.map((gen) => (
          <ListItem key={gen.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={GetproperUrl(gen.image_background)}
              />
              <Box justifyContent={"space-between"}>
                <Button
                  variant={"link"}
                  fontWeight={gen.id == selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onselectedGenre(gen)}
                >
                  {gen.name}
                </Button>
              </Box>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  );
};

export default GenreList;
