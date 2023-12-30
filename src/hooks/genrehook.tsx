import FetchData from "./fetchdata";

export interface Genre {
  id: number;
  name: string;
}

const FetchGenre = () =>  FetchData<Genre>('/genres');

export default FetchGenre;
