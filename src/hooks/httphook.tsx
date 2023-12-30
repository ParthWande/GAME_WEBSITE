
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

const httphook = () => FetchData<Game>('/games');

export default httphook;
