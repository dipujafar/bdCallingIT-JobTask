import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews`);
      return res?.data;
    },
  });

  return [reviews, isLoading, refetch];
};

export default useReviews;
