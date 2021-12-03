import { VariantProps } from "../../theme";
import { ButtonStyleProps } from "./Button.styled";

export interface ButtonVariants {
  primary: VariantProps<ButtonStyleProps>
  secondary: VariantProps<ButtonStyleProps>
  danger: VariantProps<ButtonStyleProps>
}

export type ButtonTheme = ButtonStyleProps & { variants: Partial<ButtonVariants> }

export const buttonTheme: ButtonTheme = {
  borderWidth: 0,
  textAlign: "center",
  fontSize: "medium",
  px: 20,
  py: 5,
  borderRadius: 5,
  variants: {
    primary: {
      color: "white",
      backgroundColor: "primary",
    },
    secondary: {
      color: "white",
      bg: "secondary",
    },
    danger: {
      backgroundColor: "warning",
    }
  }
};