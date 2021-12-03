import React from 'react';
import { DefaultTheme, StyledComponent, useTheme } from "styled-components";
import { PropsOf } from "../../../typeUtils";
import { TextProps, ThemedText } from './Text.styled';
import { useMemo } from "react";
import deepmerge from "deepmerge";

const BaseTextComponent: React.FC<PropsOf<typeof ThemedText> & TextProps> = ({
    variant = "regular",
    ...props
}) => {

    const theme = useTheme();
    const textTheme = theme.text;

    const baseTheme = useMemo(() => {
        const { variants, ...restOfTheme } = textTheme;
        return restOfTheme;
    }, [textTheme])

    const variantTheme = useMemo(() => {
        const { variants, ...restOfTheme } = textTheme;
        return variants[variant]!;
    }, [textTheme, variant])

    // const textThemeProps = useMemo(() => {
    //     const result = deepmerge(baseTheme, variantTheme, { clone: true });
    //     console.log("button theme deep merge", result)
    //     return result;
    // }, [baseTheme, variantTheme])


    return (
        <ThemedText {...baseTheme} variant={variant} {...props} >
            {props.children}
        </ThemedText >
    )
}

export const Text = BaseTextComponent as StyledComponent<"span", DefaultTheme, PropsOf<typeof ThemedText> & TextProps, never>


export default Text as StyledComponent<"span", DefaultTheme, PropsOf<typeof ThemedText> & TextProps, never>
