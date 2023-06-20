import { useQuery } from '@tanstack/react-query';
import  Axios  from "axios";


const useQueryFetch = (arr: string[], url: string) => {

    const {data, isLoading, isFetching, isError} = useQuery({
        queryKey: arr, 
        queryFn: async () => {
          const result = await Axios
            .get(url)
            return result
        }
      })


      return {data, isLoading, isFetching, isError}
}

export default useQueryFetch