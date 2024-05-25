import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductReviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: productReviews = [],
    isLoading: isLoadingReviews,
    refetch,
  } = useQuery({
    queryKey: ["productReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/productReviews`);
      return res?.data;
    },
  });

  return [productReviews, isLoadingReviews, refetch];
};

export default useProductReviews;
