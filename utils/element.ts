import { CSSObjectWithLabel } from "react-select";
import { ClassNamesState } from "react-select/dist/declarations/src/types";
import { borderGray, colorBlack, disabledState } from "@/constants/color";

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
