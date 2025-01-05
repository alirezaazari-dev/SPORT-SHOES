import { useQuery } from "@tanstack/react-query";
import { getArrFavoriteList } from "../../services/apiAll";

export function useExtractFavoriteList(id) {
  const { data: arrFavorite, isLoading } = useQuery({
    queryKey: ["user", "getFavorite"],
    queryFn: () => getArrFavoriteList(id),
  });

  return { arrFavorite, isLoading };
}
