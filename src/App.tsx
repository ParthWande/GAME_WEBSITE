import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/genrehook";
import { useState } from "react";

const App = () => {
   const [selGen,setSelgen]=useState<Genre | null >(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList selectedGenre={selGen} onselectedGenre={(gen)=>setSelgen(gen)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid SelectedGenre={selGen}  />
      </GridItem>
    </Grid>
  );
};

export default App;
