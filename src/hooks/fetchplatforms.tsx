import { useQuery } from "@tanstack/react-query";
import FetchData, { Fetch } from "./fetchdata";
import { Platform } from "./fetchgames";
import apiClient from "../services/api-client";

export const FetchPlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn: () => apiClient.get<Fetch<Platform>>('/platforms/lists/parents').then((response) => response.data)
})
