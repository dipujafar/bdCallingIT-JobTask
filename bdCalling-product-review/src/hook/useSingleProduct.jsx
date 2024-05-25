import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleProduct = (id) => {
  const axiosPublic = useAxiosPublic();
  console.log(id);
  const {
    data: product = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res?.data;
    },
  });

  return [product, isLoading, refetch];
};

export default useSingleProduct;
