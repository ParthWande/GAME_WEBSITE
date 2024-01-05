import { GameQuery } from "../App";
import FetchData from "./fetchdata";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const httphook = (gamequery: GameQuery) =>
  FetchData<Game>(
    "/games",
    {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id,
        search: gamequery.searchtext 
      },
    },
    [gamequery]
  );

export default httphook;
