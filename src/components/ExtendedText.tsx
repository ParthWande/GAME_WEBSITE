import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface props {
  children: string ;
}

const ExtendedText = ({ children }: props) => {
  const [expanded, IsExpanded] = useState(false);
  const lim = 300;

  if(!children) return null;
  if (children.length <= lim) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, lim) + "...";

  return (
    <Text>
      {summary}
      <Button
      size={'xs'}
        colorScheme={"yellow"}
        fontWeight={"bold"}
        onClick={() => IsExpanded(!expanded)}
        marginLeft={1}
      >
        {expanded ? "showless" : "showmore"}
      </Button>
    </Text>
  );
};
export default ExtendedText;
