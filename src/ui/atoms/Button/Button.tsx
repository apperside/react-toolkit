import React, { useMemo } from 'react';
import { useTheme } from "styled-components";
import { ButtonProps, ThemedButton } from './Button.styled';

/**
 * Button UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    label,
    ...props
}) => {
    const theme = useTheme();
    const buttonTheme = theme.button;
    const baseTheme = useMemo(() => {
        const { variants, ...restOfTheme } = buttonTheme;
        return restOfTheme;
    }, [theme])
    console.log("base theme is", baseTheme)
    return (
        <ThemedButton {...baseTheme} variant={variant} {...props} >
            {label ?? props.children}
        </ThemedButton >
    )
};

export default Button;
