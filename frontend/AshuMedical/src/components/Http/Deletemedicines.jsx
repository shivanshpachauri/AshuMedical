import { useMutation } from "@tanstack/react-query";
import { deletemedicine } from "./http";
import { useQueryClient } from "@tanstack/react-query";
export default function Deletemedicines() {
  const queryClient = useQueryClient();

  const { mutate: mutatemedicines } = useMutation({
    mutationFn: deletemedicine,
    onSuccess: () => {
      queryClient.invalidateQueries(["Fetchmedicines"]);
      queryClient.invalidateQueries(["searchmedicines"]);
    },
  });
  return mutatemedicines;
}
