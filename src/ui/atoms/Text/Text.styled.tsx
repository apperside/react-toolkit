import { PropsWithVariant } from "../../theme";
import styled from 'styled-components';
import {
    BackgroundImageProps, border, BorderProps, borderRadius, color,
    ColorProps, flexbox, FlexboxProps, FontFamilyProps, fontSize, layout, LayoutProps, padding,
    position, space, SpaceProps, textStyle, TextStyleProps as SSTextStyleProps, typography,
    TypographyProps as SSTypographyProps, variant, WidthProps
} from 'styled-system';
import { TextVariants } from "./Text.theme";

export type TextStyleProps =
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

export interface TextProps extends TextStyleProps, PropsWithVariant<keyof TextVariants> {
    // children: React.ReactNode;
    // label?: string
    // onClick?: () => void
}

export const ThemedText = styled.span<TextProps>(
    {
        // appearance: 'text',
        border: 0,
        outline: 0,
    },
    props => {
        return variant({
            variants: props.theme.text.variants as any
        })
    },
    borderRadius,
    // textSize,
    textStyle,
    color,
    space,
    fontSize,
    color,
    space,
    layout,
    padding,
    flexbox,
    border,
    typography,
    position,


);
