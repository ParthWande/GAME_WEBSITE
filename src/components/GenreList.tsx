import FetchGenre, { Genre } from "../hooks/genrehook";
import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import GetproperUrl from "../hooks/image-correction";
import SkeletonGenre from "./skeleton_genre";

const GenreList = () => {
  const { data, loading } = FetchGenre();
  const skel = [1, 2, 3, 4, 5, 6];
  return (
    <Box padding={8}>
      <List>
        {loading && skel.map((sk) =><SkeletonGenre key={sk}/>)}
        {data.map((gen) => (
          <ListItem key={gen.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={GetproperUrl(gen.image_background)}
              />
              <Text>{gen.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
