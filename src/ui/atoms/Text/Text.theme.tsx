import { VariantProps } from "../../theme";
import { TextStyleProps } from "./Text.styled";


// type BaseTextVariants = { [key: string]: VariantProps<TextProps> }

export interface TextVariants {
  regular: VariantProps<TextStyleProps>;
  bold: VariantProps<TextStyleProps>;
  medium: VariantProps<TextStyleProps>;
  black: VariantProps<TextStyleProps>;
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

export type TextTheme = TextStyleProps & { variants: Partial<TextVariants> }
// interface Variants<T>={[key:keyof:T]}
export const textTheme: TextTheme = {
  variants: {
    regular: {
      fontFamily: "regular",
      // backgroundColor: "yellow",
    },
    bold: {
      fontFamily: "bold"
    },
    medium: {
      fontFamily: "medium"
    },
    black: {
      fontFamily: "black"
    }
  }
};