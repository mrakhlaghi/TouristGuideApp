import { useSearchParams } from "next/navigation";

export default function useUrlLocation() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
