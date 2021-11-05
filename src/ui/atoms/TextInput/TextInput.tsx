import React, { useCallback } from 'react';
import { useTheme } from "styled-components";
import { PropsOf } from "../../../typeUtils";
import { TextInputProps, ThemedTextInput } from './TextInput.styled';
import { useMemo } from "react";
export const TextInput: React.FC<PropsOf<typeof ThemedTextInput> & TextInputProps> = ({
    variant = "primary",
    onEnterPress,
    ...props
}) => {

    const listener = useCallback((event: any) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            event.preventDefault();
            onEnterPress?.();
        }
    }, [onEnterPress]);

    const theme = useTheme();
    const textInputTheme = theme.textInput;
    const baseTheme = useMemo(() => {
        const { variants, ...restOfTheme } = textInputTheme;
        return restOfTheme;
    }, [textInputTheme])

    return (
        <ThemedTextInput {...baseTheme} variant={variant} onKeyDown={listener} {...props} />
    )
};

export default TextInput;
