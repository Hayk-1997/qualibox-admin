import { CSSObjectWithLabel } from "react-select";
import { ClassNamesState } from "react-select/dist/declarations/src/types";
import { borderGray, colorBlack, disabledState } from "@/constants/color";
import { ReadonlyURLSearchParams } from "next/dist/client/components/navigation.react-server";
import { OrderDirectionEnum } from "@/enums/common";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type TSelectDropDownStyles = (styles?: {
  menu?: object;
  control?: object;
}) => object;

export const selectDropDownStyles: TSelectDropDownStyles = (styles = {}) => ({
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    zIndex: 8888,
    ...(styles &&
      styles.menu && {
        ...styles.menu,
      }),
  }),
  control: (baseStyles: CSSObjectWithLabel, state: ClassNamesState) => ({
    ...baseStyles,
    borderColor: `${borderGray} !important`,
    boxShadow: "none",
    backgroundColor: state.isDisabled ? `${disabledState} !important` : "",
    ...(styles &&
      styles.control && {
        ...styles.control,
      }),
  }),
  option: (baseStyles: CSSObjectWithLabel, state: ClassNamesState) => ({
    ...baseStyles,
    backgroundColor: state.isSelected && `${borderGray} !important`,
    color: state.isSelected && `${colorBlack} !important`,
    cursor: "pointer",
  }),
});

type TSortTable = (
  searchParams: ReadonlyURLSearchParams,
  pathname: string,
  name: string,
  orderDirection: OrderDirectionEnum,
  router: AppRouterInstance,
) => void;

export const sortTable: TSortTable = (
  searchParams,
  pathname,
  name,
  orderDirection,
  router,
): void => {
  const params = new URLSearchParams(searchParams);
  params.set("orderBy", name);
  params.set("orderDirection", orderDirection);

  const data = params.toString();

  router.replace(pathname + "?" + data);
};
