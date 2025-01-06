import { useQuery } from "@tanstack/react-query"
import { getData } from "../apis/getData"
import { DonkeyTable } from "../types"

export const useTableData = (endpoint?: DonkeyTable["endpoint"]) => 
    useQuery({
        queryKey: ["table", endpoint],
        queryFn: () => getData(endpoint!),
        enabled: !!endpoint
    })