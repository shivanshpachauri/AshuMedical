import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatedelivery } from "./http";

export default function Updatedelivery() {
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updatedelivery,
    onSuccess: () => {
      queryclient.invalidateQueries(["Fetchdelivery"]);
    },
  });
  return mutate;
}
