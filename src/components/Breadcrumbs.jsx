import { useLocation } from "preact-iso";

export function Breadcrumbs() {
  const { url } = useLocation();

  return (
    <div className={"w-full flex justify-between items-center"}>
      Home
    </div>
  );
}
