import shouldForwardProp from "@styled-system/should-forward-prop";
import { PropsOf } from "../../../typeUtils";
import styled from 'styled-components';
import { FlexboxProps } from "styled-system";
import { background, BackgroundImageProps, BorderProps, borderRadius, TextStyleProps as SSTextStyleProps, color, ColorProps, flexbox, fontFamily, FontFamilyProps, fontSize, fontStyle, fontWeight, layout, LayoutProps, letterSpacing, lineHeight, size, space, SpaceProps, textAlign, textStyle, TextStyleProps, TypographyProps as SSTypographyProps, variant, width, WidthProps } from "styled-system";
import { PropsWithVariant } from "../../theme";
import { TextInputVariants } from "./TextInput.theme";

export type TextInputStyleProps =
    & SSTypographyProps
    & SpaceProps
    & WidthProps
    & ColorProps
    & BackgroundImageProps
    & SSTextStyleProps
    & LayoutProps
    & FlexboxProps
    & FontFamilyProps
    & BorderProps

export interface TextInputProps extends TextInputStyleProps, PropsWithVariant<keyof TextInputVariants> {
    // children: React.ReactNode;
    value?: string | number
    onEnterPress?: () => void
    // onClick?: () => void
}
const InternalThemedTextInput = styled.input.withConfig<TextInputProps>({
    // avoid forwarding styled-system's props to dom
    shouldForwardProp: (prop: any) => prop === "placeholderTextColor" || prop === "keyboardType" || shouldForwardProp(prop)

})<TextInputProps>(
    space,
    fontSize,
    fontStyle,
    size,
    color,
    textStyle,
    letterSpacing,
    fontFamily,
    fontWeight,
    borderRadius,
    lineHeight,
    textAlign,
    background,
    flexbox,
    layout,
    width,
    props => variant({
        variants: props.theme.textInput.variants as any
    }),
    {
        boxSizing: "border-box"
    }
);

type ThemedTextInputProps = Omit<PropsOf<typeof InternalThemedTextInput>, "size" | "width" | "height"> & LayoutProps;

export const ThemedTextInput: React.FC<ThemedTextInputProps> = InternalThemedTextInput;