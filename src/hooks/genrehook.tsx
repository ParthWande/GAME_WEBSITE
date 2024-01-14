import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genre = new APIClient<Genre>('/genres');

const FetchGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn:genre.getAll,
  });

export default FetchGenre;
