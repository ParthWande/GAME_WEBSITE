import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"Coral"}>
        Navigation Bar
      </GridItem>
      <Show above="lg">
      <GridItem area={"aside"} bg={"blueviolet"}>
        Aside
      </GridItem>
      </Show>
      <GridItem area={"main"} bg={"gold"}>
        Main
      </GridItem>
      
    </Grid>
  );
};

export default App;
