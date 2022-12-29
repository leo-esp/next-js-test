import { useRouterPath } from "./useRouterPath";

export const useBreadcrumbPath = () => {
  const route = useRouterPath();
  return route.split("/");
};
