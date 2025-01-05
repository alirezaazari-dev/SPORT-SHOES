import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../services/apiAll";

export function useFootball() {
  const { data: football, isLoading } = useQuery({
    queryKey: ["football"],
    queryFn: () => getShoes("football"),
  });

  return { football, isLoading };
}
