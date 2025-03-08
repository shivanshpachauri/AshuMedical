import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatemedicine } from "./http";

export default function Updatemedicine() {
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updatemedicine,
    onSuccess: () => {
      queryclient.invalidateQueries(["Fetchmedicines"]);
      queryclient.invalidateQueries(["searchmedicines"]);
    },
  });
  return mutate;
}
