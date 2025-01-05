import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../services/apiAll";

export function useBasketball() {
  const { data: basketball, isLoading } = useQuery({
    queryKey: ["basketball"],
    queryFn: () => getShoes("basketball"),
  });

  return { basketball, isLoading };
}
