import { getAi } from "./http";
import { useQuery } from "@tanstack/react-query";
export default function Fetchai() {
  const data = useQuery({
    queryKey: ["fetchai"],
    queryFn: getAi,
  });

  return data;
}
