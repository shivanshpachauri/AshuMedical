import { useMutation } from "@tanstack/react-query";
import { postdelivery } from "./http";
import { useQueryClient } from "@tanstack/react-query";
export default function Postdelivery() {
  const queryClient = useQueryClient();
  const { mutate: mutatedelivery } = useMutation({
    mutationFn: postdelivery,
    onSuccess: () => {
      queryClient.invalidateQueries(["Fetchdelivery"]);
    },
  });
  return mutatedelivery;
}
