import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import HeadingFilter from "../components/HeadingFilter";
import NavBar from "../components/NavBar";
import PlatformBar from "../components/PlatformBar";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={10}>
          <HeadingFilter />
          <PlatformBar />
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
