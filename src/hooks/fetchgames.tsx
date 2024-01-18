import { useQuery } from "@tanstack/react-query";
import { Fetch } from "../services/api-client";
import APIClient from "../services/api-client";
import getGame from "../store";

const games = new APIClient<Game>("/games");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Publishers{
  id:number;
  name:string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
  genres:Genre[];
  publishers:Publishers[];
  description_raw:string;
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

const httphook = () => {
  const { gameQuery } = getGame();
  return useQuery<Fetch<Game>, Error>({
    queryKey: ["game", gameQuery],
    queryFn: () =>
      games.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          search: gameQuery.searchtext,
        },
      }),
  });
};

export default httphook;
