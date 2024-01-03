import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/fetchgames";
import { HStack, Icon } from "@chakra-ui/react";

interface PlatformProps {
  platform: Platform[];
}

const IconComponent = ({ platform }: PlatformProps) => {
  const Icons: Record<string, React.ComponentType<any>> = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={2}>
      {platform.map((platform) => {
        const IconComponent = Icons[platform.slug] as React.ComponentType<any>;

        if (IconComponent) {
          return (
            <Icon as={IconComponent} key={platform.slug} color={"gray.500"} />
          );
        }
        return null;
      })}
    </HStack>
  );
};

export default IconComponent;
