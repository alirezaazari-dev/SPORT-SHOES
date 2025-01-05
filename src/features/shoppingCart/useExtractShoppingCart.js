import { useQuery } from "@tanstack/react-query";
import { getArrShop } from "../../services/apiAll";

export function useExtractShoppingCart(id) {
  const { data: arrShop, isLoading } = useQuery({
    queryKey: ["user", "getShop"],
    queryFn: () => getArrShop(id),
  });

  return { arrShop, isLoading };
}
