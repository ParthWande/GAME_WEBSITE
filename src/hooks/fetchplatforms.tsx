import FetchData from "./fetchdata";
import { Platform } from "./fetchgames";

export const FetchPlatforms = () =>
  FetchData<Platform>("/platforms/lists/parents");
