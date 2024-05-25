import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (sort) => {
  const axiosPublic = useAxiosPublic();
  console.log(sort);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?sort=${sort}`);
      return res?.data;
    },
  });

  return [products, isLoading, refetch];
};

export default useProducts;
