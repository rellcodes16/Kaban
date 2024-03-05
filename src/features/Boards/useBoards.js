import { useQuery } from "@tanstack/react-query";
import { getBoardsData } from "../../services/ApiBoards";

export function useBoards(){
    const { isLoading, data: boards } = useQuery({
        queryKey: ['boards'],
        queryFn: getBoardsData,
    });

    console.log(boards) 
    return { isLoading, boards }
}
