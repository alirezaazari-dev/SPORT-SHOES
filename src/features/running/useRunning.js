import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../services/apiAll";

export function useRunning() {
  const { data: running, isLoading } = useQuery({
    queryKey: ["running"],
    queryFn: () => getShoes("running"),
  });

  return { running, isLoading };
}
