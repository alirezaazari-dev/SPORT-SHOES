import { useQuery } from "@tanstack/react-query";
import { getRecommended } from "../services/apiAll";

export function useRecommended(category, productId) {
  const { data: recommended, isLoading } = useQuery({
    queryKey: [productId],
    queryFn: () => getRecommended(category, productId),
  });

  return { recommended, isLoading };
}
