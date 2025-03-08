import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertmedicines } from "./http";

export default function Insertmedicines() {
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: insertmedicines,
    onSuccess: () => {
      queryclient.invalidateQueries(["Fetchmedicines"]);
      queryclient.invalidateQueries(["searchmedicines"]);
    },
  });
  return mutate;
}
