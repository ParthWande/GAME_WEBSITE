import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Screenshot{
    id:number;
    image:string;
    width:number;
    height:number;
}

const fetchSS= (gameId:number) => {
    const api = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey:['screenshot', gameId],
        queryFn: api.getAll
    })
}
export default fetchSS