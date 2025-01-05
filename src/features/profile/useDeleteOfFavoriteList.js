import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItemFavoriteList } from "../../services/apiAll";
import toast from "react-hot-toast";

export function useDeleteOfFavoriteList(setIsExistInFavoriteList = null) {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingOfFavoriteList, mutate: deleteOfFavorite } =
    useMutation({
      mutationFn: deleteItemFavoriteList,
      onSuccess: () => {
        if (setIsExistInFavoriteList !== null) setIsExistInFavoriteList(false);
        toast.success("از لیست مورد علاقه ها حذف شد.");
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
      },
      onError: (err) => {
        // alert();
        toast.error(err.message);
      },
    });

  return {
    isDeletingOfFavoriteList,
    deleteOfFavorite,
  };
}
