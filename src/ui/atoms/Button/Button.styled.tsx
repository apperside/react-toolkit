import { PropsWithVariant } from "../../theme";
import styled from 'styled-components';
import {
    border, BorderProps, borderRadius,
    buttonStyle,
    color,
    ColorProps, flexbox, FlexboxProps, fontSize, layout, LayoutProps, padding,
    position, PositionProps, space, SpaceProps, typography, TypographyProps, variant
} from 'styled-system';
import { ButtonVariants } from "./Button.theme";

export type ButtonStyleProps =
    ColorProps &
    BorderProps &
    SpaceProps &
    LayoutProps &
    TypographyProps &
    FlexboxProps &
    PositionProps;

export interface ButtonProps extends ButtonStyleProps, PropsWithVariant<keyof ButtonVariants> {
    // children: React.ReactNode;
    label?: string
    onClick?: () => void
}

export const ThemedButton = styled('button')<ButtonProps>(
    {
        appearance: 'button',
        border: 0,
        outline: 0,
    },
    borderRadius,
    // buttonSize,
    buttonStyle,
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
    props => {
        return variant({
            variants: props.theme.button.variants as any
        })
    },

);
