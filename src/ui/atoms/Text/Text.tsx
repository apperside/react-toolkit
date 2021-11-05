import React from 'react';
import { useTheme } from "styled-components";
import { PropsOf } from "../../../typeUtils";
import { TextProps, ThemedText } from './Text.styled';
import { useMemo } from "react";

export const Text: React.FC<PropsOf<typeof ThemedText> & TextProps> = ({
    variant = "regular",
    ...props
}) => {

    const theme = useTheme();
    const textInputTheme = theme.textInput;
    const baseTheme = useMemo(() => {
        const { variants, ...restOfTheme } = textInputTheme;
        return restOfTheme;
    }, [textInputTheme])

    return (
        <ThemedText {...baseTheme} variant={variant} {...props} >
            {props.children}
        </ThemedText >
    )
};

export default Text;
