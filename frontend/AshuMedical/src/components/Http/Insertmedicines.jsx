import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertmedicines } from "./http";
import { useDispatch } from "react-redux";
import { seterror } from "../store/alertslice";

export default function Insertmedicines() {
  const dispatch = useDispatch();
  const queryclient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: insertmedicines,
    onSuccess: () => {
      queryclient.invalidateQueries(["Fetchmedicines"]);
      queryclient.invalidateQueries(["searchmedicines"]);
    },
    onError: (error) => {
      dispatch(seterror({ error: error.message }));
    },
  });
  return mutate;
}
