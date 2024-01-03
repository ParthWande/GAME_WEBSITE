import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { FetchPlatforms } from "../hooks/fetchplatforms";
import { Platform } from "../hooks/fetchgames";

interface Plat {
  OnselectPlatform: (Platform: Platform) => void;
}

const PlatformBar = ({ OnselectPlatform }: Plat) => {
  const { data, error } = FetchPlatforms();
  if (error) return <Text marginLeft={10}>Error UwU</Text>;
  return (
    <Box marginLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((dat) => (
            <MenuItem onClick={() => OnselectPlatform(dat)} key={dat.id}>
              {dat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformBar;
