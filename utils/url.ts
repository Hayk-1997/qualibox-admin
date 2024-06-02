import { ReadonlyURLSearchParams } from "next/navigation";

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
