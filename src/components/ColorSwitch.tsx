import { Button, HStack, useColorMode } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { FaMoon,FaSun } from "react-icons/fa";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [text, setText] = useState(colorMode);
  useEffect(() => {
    setText(colorMode);
  }, [colorMode]);

  return (
    <HStack>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode == "light"}
        onChange={toggleColorMode}
      ></Switch> */}
      <Button onClick={toggleColorMode}>{text == 'light' ? <FaSun color="black"/> : <FaMoon/>}</Button>
    </HStack>
  );
};

export default ColorSwitch;
