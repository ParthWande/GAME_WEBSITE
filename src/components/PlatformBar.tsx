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
import getGame from "../store";



const PlatformBar = () => {
  const OnselectPlatform = getGame(s=>s.setPlatform)
  const { data, error } = FetchPlatforms();
  if (error) return <Text marginLeft={10}>Error UwU</Text>;
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data?.results.map((dat) => (
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
