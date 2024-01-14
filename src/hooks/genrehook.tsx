import { useQuery } from "@tanstack/react-query";
import { Fetch } from "./fetchdata";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const FetchGenre = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: () => apiClient.get<Fetch<Genre>>("/genres").then((Res) => Res.data),
    staleTime: 24*60*60*1000,
  });

export default FetchGenre;
