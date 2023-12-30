import FetchGenre, { Genre } from "../hooks/genrehook";
import { Box } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = FetchGenre();
  return (
    <Box padding={8}>
      <ul>
        {data.map((gen) => (
          <li>{gen.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default GenreList;
