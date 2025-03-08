import { searchmedicine } from "./http";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";
export default function Searchmedicines(searchParams) {
  const { isSorted } = useContext(SortingContext);

  const data = useQuery({
    queryKey: ["searchmedicines", searchParams, isSorted],
    queryFn: () =>
      searchmedicine(
        searchParams.id,
        searchParams.manufacturer_name,
        searchParams.medicine_name,
        searchParams.pack_size_label,
        searchParams.short_composition1,
        isSorted
      ),
    enabled:
      !!searchParams.manufacturer_name ||
      !!searchParams.medicine_name ||
      !!searchParams.pack_size_label ||
      !!searchParams.id ||
      !!searchParams.short_composition1, // Only run if at least one field is filled
  });

  return data;
}
