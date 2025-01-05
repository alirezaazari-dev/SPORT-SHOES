import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToFavoriteList } from "../../services/apiAll";
import toast from "react-hot-toast";

export function useAddToFavorite(setIsExistInFavoriteList) {
  const queryClient = useQueryClient();
  const {
    isLoading: isAddingToFavorite,
    mutate: addToFavorite,
    isSuccess: isSuccessAddToFavoriteList,
  } = useMutation({
    mutationFn: addToFavoriteList,
    onSuccess: () => {
      setIsExistInFavoriteList(true);
      toast.success("به لیست مورد علاقه ها اضافه شد.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      //   alert(err.message);
      toast.error(err.message);
    },
  });

  return { isAddingToFavorite, addToFavorite, isSuccessAddToFavoriteList };
}
