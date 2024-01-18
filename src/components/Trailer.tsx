import { Text } from "@chakra-ui/react";
import UseTrailer from "../hooks/fetchTrailer";

interface props {
  gameId: number;
}

const Trailer = ({ gameId }: props) => {
  const { data, error, isLoading } = UseTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  console.log(data);
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    ></video>
  );
};
export default Trailer;
