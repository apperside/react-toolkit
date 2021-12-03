import { PropsOf } from "src/typeUtils";
import styled from 'styled-components';
import {
    border, BorderProps, borderRadius,
    buttonStyle,
    color,
    ColorProps, flexbox, FlexboxProps, fontSize, layout, LayoutProps, padding,
    position, PositionProps, space, SpaceProps, typography, variant
} from 'styled-system';
import { CursorProps, PropsWithVariant } from "../../theme";
import { AssetName } from "../Asset";
import Text from "../Text/Text";
import { ButtonVariants } from "./Button.theme";

export type ButtonStyleProps =
    ColorProps &
    BorderProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    PositionProps &
    CursorProps &
    { textStyle?: PropsOf<typeof Text> }


export interface ButtonProps extends ButtonStyleProps, PropsWithVariant<keyof ButtonVariants> {
    // children: React.ReactNode;
    label?: string
    onClick?: () => void
    isLoading?: boolean
    icon?: AssetName | React.ReactNode
    iconPosition?: 'left' | 'right'
    iconSize?: number
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
