import { useQuery } from "@tanstack/react-query";
import { Platform } from "./fetchgames";
import APIClient, { Fetch } from "../services/api-client";

const platform = new APIClient<Platform>('/platforms/lists/parents');


export const FetchPlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn: platform.getAll
})
