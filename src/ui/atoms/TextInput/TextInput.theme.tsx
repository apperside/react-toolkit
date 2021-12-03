import { VariantProps } from "../../theme";
import { TextInputStyleProps } from "./TextInput.styled";


// type BaseTextInputVariants = { [key: string]: VariantProps<TextInputProps> }

export interface TextInputVariants {
  primary: VariantProps<TextInputStyleProps>;
  secondary: VariantProps<TextInputStyleProps>;
}

/**
 * The new type for a themed component with variants
 * @param Props type of component's props
 * @param Variant the type defining the component's variants
 * 
 * EG: type MyComponentVariants = "primary" | "secondary"
 */
// export type ThemedComponentWithVariants<Props, Variants extends string> =
//   Props & { variants: VariantsProps<Props, Variants> }

export type TextInputTheme = TextInputStyleProps & { variants: Partial<TextInputVariants> }
// interface Variants<T>={[key:keyof:T]}
export const textInputTheme: TextInputTheme = {
  fontFamily: "body",
  py: 10, px: 15,
  borderStyle: "solid",
  borderWidth: 1,

  variants: {
    primary: {
      borderColor: "primary",
    },
    secondary: {
      borderColor: "secondary"
    },
  }
};