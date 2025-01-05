import { useQuery } from "@tanstack/react-query";
import { getAllCategoryForSearch } from "../../services/apiAll";

export function useSearch() {
  const { data: searchData, isLoading: isSearching } = useQuery({
    queryKey: ["search"],
    queryFn: () => getAllCategoryForSearch(),
  });

  return { searchData, isSearching };
}
