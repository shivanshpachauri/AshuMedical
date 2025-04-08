import { useQuery } from "@tanstack/react-query";
import { Fetchmedicines } from "./http";
// import Sortingcomponent from "../Context/Sortingcomponent";
import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";
export default function Fetchingmedicines() {
  const { isSorted } = useContext(SortingContext);
  const data = useQuery({
    queryKey: ["Fetchmedicines", isSorted],
    queryFn: () => Fetchmedicines(isSorted.bestselling),
    staleTime: 3000,
    cacheTime: 3000,
  });
  return data;
}
