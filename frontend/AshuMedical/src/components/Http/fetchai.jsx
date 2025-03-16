import { sendMessage } from "./http";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export default function Fetchai() {
  const queryClient = useQueryClient();
  const { mutate: mutateai } = useQuery({
    mutationFn: sendMessage,
  });

  return mutateai;
}
