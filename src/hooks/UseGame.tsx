import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./fetchgames";

const ApiClient = new APIClient<Game>("/games");

const UseGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => ApiClient.get(slug),
  });

  export default UseGame;