import { ReadonlyURLSearchParams } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const changeURLSearchParams = (
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams,
): string => {
  const params = new URLSearchParams(searchParams);
  if (searchParams.get(name) === value) {
    params.delete(name);
  } else {
    params.set(name, value);
  }

  return params.toString();
};

export const handlePaginationChange = (
  page: number,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance,
  pathname: string,
) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));

  router.replace(pathname + "?" + params.toString());
};
