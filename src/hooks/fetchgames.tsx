import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../Pages/HomePage";
import { Fetch } from "../services/api-client";
import APIClient from "../services/api-client";

const games = new APIClient<Game>("/games");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface description {
  id: number;
  name: string;
  slug: string;
  description: string;
}

const httphook = (gamequery: GameQuery) =>
  useQuery<Fetch<Game>, Error>({
    queryKey: ["game", gamequery],
    queryFn: () =>
      games.getAll({
        params: {
          genres: gamequery.genre?.id,
          parent_platforms: gamequery.platform?.id,
          search: gamequery.searchtext,
        },
      }),
  });

export default httphook;
