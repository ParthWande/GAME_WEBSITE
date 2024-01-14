import FetchData from "./fetchdata";
import { description } from "./fetchgames";

const fetchdecs = (id: number) => FetchData<description>('/games'+ id)

export default fetchdecs;