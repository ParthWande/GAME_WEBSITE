import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "./fetchgames";



const genre = new APIClient<Genre>('/genres');

const FetchGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn:genre.getAll,
  });

export default FetchGenre;
