import { getAi } from "./http";
import { useQuery } from "@tanstack/react-query";
export default function Fetchai() {
  const data = useQuery({
    queryKey: ["fetchai"],
    queryFn: getAi,
    staleTime: 3000,
    cacheTime: 3000,
  });

  return data;
}
