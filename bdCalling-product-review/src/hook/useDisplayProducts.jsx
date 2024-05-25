import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// eslint-disable-next-line no-unused-vars
const useDisplayProducts = (search) => {
  console.log(search);
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/displayProducts?search=${search}`);
      return res?.data;
    },
  });

  return [products, isLoading, refetch];
};

export default useDisplayProducts;
