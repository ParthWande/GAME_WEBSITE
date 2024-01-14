import { Grid, GridItem, Show, Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import HeadingFilter from '../components/HeadingFilter';
import NavBar from '../components/NavBar';
import PlatformBar from '../components/PlatformBar';
import { Platform, Game } from '../hooks/fetchgames';
import { Genre } from '../hooks/genrehook';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    searchtext: string;
    game: Game | null;
  }


const HomePage = () => {
    const [GameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: ` "nav nav " "aside main"`,
          }}
          templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        >
          <GridItem area={"nav"}>
            <NavBar
              Onclick={(searchtext) => SetGameQuery({ ...GameQuery, searchtext })}
            />
          </GridItem>
          <Show above="lg">
            <GridItem area={"aside"}>
              <GenreList
                selectedGenre={GameQuery.genre}
                onselectedGenre={(genre) => SetGameQuery({ ...GameQuery, genre })}
              />
            </GridItem>
          </Show>
          <GridItem area={"main"}>
            <Box marginLeft={10}>
              <HeadingFilter gamequery={GameQuery} />
              <PlatformBar
                OnselectPlatform={(platform) =>
                  SetGameQuery({ ...GameQuery, platform })
                }
              />
            </Box>
    
            <GameGrid
              gamequery={GameQuery}
              onclick={(game) => SetGameQuery({ ...GameQuery, game })}
            />
          </GridItem>
        </Grid>
      );
  
}

export default HomePage