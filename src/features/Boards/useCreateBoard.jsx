import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBoard as createBoardApi } from "../../services/ApiBoards";

export function useCreateBoard(){
    const queryClient = useQueryClient()

    const { mutate: createBoard, isLoading: isCreating } = useMutation({
      mutationFn: createBoardApi,
      onSuccess: () => {
        toast.success('New Board Created');
        queryClient.invalidateQueries({ queryKey: ['boards'] });
      },
      onError: (err) => {
        toast.err(err.message)
      }
    })

    return { createBoard, isCreating }
}
