import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchBar from "./SearchBar";
interface props{
  Onclick : (search :string) => void;
}

const NavBar = ({Onclick}: props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar Onclick={(string)=>Onclick(string)}/>
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
