import FetchData from "./fetchdata";

export interface Genre {
  id: number;
  name: string;
  image_background:string;
}

const FetchGenre = () =>  FetchData<Genre>('/genres');

export default FetchGenre;
