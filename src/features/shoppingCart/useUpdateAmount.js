import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAmountInShoppingCart } from "../../services/apiAll";

export function useUpdatingAmount() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdatingAmount, mutate: updateAmount } = useMutation({
    mutationFn: updateAmountInShoppingCart,
    onSuccess: () => {
      // alert("تعداد تغییر کرد");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });
  return { isUpdatingAmount, updateAmount };
}
