import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToShoppingCart } from "../../services/apiAll";
import toast from "react-hot-toast";

export function useAddToShoppingCart() {
  const queryClient = useQueryClient();
  // اضافه کردن به سبد خرید
  const { isLoading: isAddingToShoppingCart, mutate: addToShopping } =
    useMutation({
      mutationFn: addToShoppingCart,
      onSuccess: () => {
        toast.success("به سبد خرید اضافه شد.");
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isAddingToShoppingCart, addToShopping };
}
