import { fetchdelivery } from "./http";
import { useQuery } from "@tanstack/react-query";
export default function Fetchdelivery() {
  const data = useQuery({
    queryKey: ["fetchdelivery"],
    queryFn: fetchdelivery,
  });

  return data;
}
