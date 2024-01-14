import { GameQuery } from "../Pages/HomePage";
import FetchData from "./fetchdata";

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
  metacritic : number;
}

export interface description{
  id: number;
  name:string;
  slug: string;
  description: string;
}

const httphook = (gamequery: GameQuery) =>
  FetchData<Game>(
    "/games",
    {
      params: {
        genres: gamequery.genre?.id,
        parent_platforms: gamequery.platform?.id,
        search: gamequery.searchtext 
      },
    },
    [gamequery]
  );

export default httphook;
