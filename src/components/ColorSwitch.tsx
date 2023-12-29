import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [text, setText] = useState(colorMode);
  useEffect(() => {
    setText(colorMode);
  }, [colorMode]);

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "light"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{text}</Text>
    </HStack>
  );
};

export default ColorSwitch;
