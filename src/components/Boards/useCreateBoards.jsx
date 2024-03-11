import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBoards as createBoardsApi } from "../../services/apiBoards";

export function useCreateBoards(){
    const queryClient = useQueryClient()

    const { mutate: createBoards, isLoading: isCreating } = useMutation({
      mutationFn: createBoardsApi,
      onSuccess: () => {
        toast.success('New Boards Item Created');
        queryClient.invalidateQueries({ queryKey: ['boards'] });
      },
      onError: (err) => {
        toast.err(err.message)
      }
    })

    return { createBoards, isCreating }
}
