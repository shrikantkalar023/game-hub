import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  next: string;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    keepPreviousData: true,
  });

// using a fn which gets the job done.
// const useGames = (gameQuery: GameQuery) =>
//   useQuery<Game[], Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: () =>
//       axiosFnFetch("/games", {
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }),
//   });

export default useGames;

// export const useInfiniteGames = (gameQuery: GameQuery) =>
//   useInfiniteQuery<Game[], Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage) =>
//       lastPage.next
//         ? lastPage.next[lastPage.next.indexOf("page=") + 5]
//         : undefined,
//   });
