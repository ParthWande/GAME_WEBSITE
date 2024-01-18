import { create } from "zustand";
import { Platform, Game, Genre } from "./hooks/fetchgames";

interface GameQuery {
    genre?: Genre | null;
    platform?: Platform | null;
    searchtext?: string;
    game?: Game | null;
  }

interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (text:string) => void;
    setGenre: (genre: Genre) => void;
    setPlatform: (platform: Platform) => void;
}

const getGame = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchtext)=> set({gameQuery:{searchtext}}),
    setGenre: (genre)=>set(store=>({gameQuery:{...store.gameQuery,genre}})),
    setPlatform: (platform)=>set(store=>({gameQuery:{...store.gameQuery,platform}})),
}))

export default getGame;