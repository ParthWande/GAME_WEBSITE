import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const UseTrailer = (gameId: number) => {
  const Trailer = new APIClient<Trailer>(`games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: Trailer.getAll,
  });
};
export default UseTrailer;
