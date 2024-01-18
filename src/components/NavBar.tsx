import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Link to={"/"} >
        <Image src={logo} boxSize="60px" objectFit={'cover'} />
      </Link>
      <SearchBar />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
