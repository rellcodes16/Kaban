import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../../services/apiBoards";

export function useBoard(){
    const {isLoading, data: boardsData, error} = useQuery({
        queryKey: ['boards'],
        queryFn: getBoards,
    })

    return { isLoading, boardsData, error }
}