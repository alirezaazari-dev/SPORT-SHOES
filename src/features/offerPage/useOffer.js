import { useQuery } from "@tanstack/react-query";
import { getAllDiscountedProducts } from "../../services/apiAll";

export function useOffer() {
  const { data: discountedProducts, isLoading } = useQuery({
    queryKey: ["offer"],
    queryFn: () => getAllDiscountedProducts(),
  });

  return { discountedProducts, isLoading };
}
