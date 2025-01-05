import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItemShoppingCart } from "../../services/apiAll";
import toast from "react-hot-toast";

export function useDeletingShop() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: deleteItemShoppingCart,
    onSuccess: () => {
      toast.success("محصول از سبد خرید حذف شد.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteProduct };
}
