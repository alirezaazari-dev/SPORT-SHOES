import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../services/apiAll";

export function useFitness() {
  const { data: fitness, isLoading } = useQuery({
    queryKey: ["fitness"],
    queryFn: () => getShoes("fitness"),
  });

  return { fitness, isLoading };
}
