import { usePathname } from "next/navigation";

export function useBreadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => ({
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + array.slice(0, index + 1).join("/"),
      active: index === array.length - 1,
    }));

  return segments;
}
