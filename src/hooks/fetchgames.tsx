import FetchData from "./fetchdata";
import { Genre } from "./genrehook";

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

const httphook = (
  SelectedGenre: Genre | null,
  SelectedPlatform: Platform | null
) =>
  FetchData<Game>(
    "/games",
    { params: { genres: SelectedGenre?.id, platforms: SelectedPlatform?.id } },
    [SelectedGenre?.id, SelectedPlatform?.id]
  );

export default httphook;
