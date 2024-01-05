import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/genrehook";
import { useState } from "react";
import PlatformBar from "./components/PlatformBar";
import { Platform } from "./hooks/fetchgames";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  searchtext: string;
}

const App = () => {
   const [GameQuery,SetGameQuery]=useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar Onclick={(searchtext)=>SetGameQuery({...GameQuery,searchtext})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList selectedGenre={GameQuery.genre} onselectedGenre={(genre)=>SetGameQuery({...GameQuery,genre})} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack marginLeft={10}>
          <PlatformBar OnselectPlatform={platform=>SetGameQuery({...GameQuery,platform})}/>
        </HStack>
        <GameGrid gamequery={GameQuery}  />
      </GridItem>
    </Grid>
  );
}; 

export default App;