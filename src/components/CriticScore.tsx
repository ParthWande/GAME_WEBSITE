import { Badge } from "@chakra-ui/react";
import React from "react";

interface props {
  score: number;
}
const CriticScore = ({ score }: props) => {
  let color = score > 85 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge fontSize={"14px"} borderRadius={3} colorScheme={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
