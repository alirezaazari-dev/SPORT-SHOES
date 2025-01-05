import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAll";

export function useUser(id) {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  return { user, isLoadingUser };
}
