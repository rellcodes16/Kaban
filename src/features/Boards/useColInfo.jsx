import { useQuery } from "@tanstack/react-query";
import { getColumnsData } from "../../services/ApiColumns";

export function useColInfo(){
    const { data: columnsData, isLoading, error } = useQuery({
        queryKey: ['columns'],
        queryFn: getColumnsData,
    });

    console.log('columnsData', columnsData)

    return { columnsData, isLoading, error }
}
