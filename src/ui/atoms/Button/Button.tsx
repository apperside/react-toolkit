import React, { useMemo } from 'react';
import { PropsOf } from "../../../typeUtils";
import { useTheme } from "styled-components";
import { ButtonProps, ThemedButton } from './Button.styled';
import { Loader } from "../Loader/Loader";

/**
 * Button UI component for user interaction
 */
export const Button: React.FC<PropsOf<typeof ThemedButton> & ButtonProps> = ({
    variant = "primary",
    label,
    isLoading,
    ...props
}) => {
    const theme = useTheme();
    const buttonTheme = theme.button;
    const baseTheme = useMemo(() => {
        const { variants, ...restOfTheme } = buttonTheme;
        return restOfTheme;
    }, [buttonTheme])
    console.log("base theme is", baseTheme)
    return (
        <ThemedButton {...baseTheme} variant={variant} {...props} >
            {isLoading && <Loader style={{ alignSelf: "center", justifyContent: "center" }} message=" " loaderSize={14} textSize={14} />}
            {(!isLoading && label) ?? props.children}
        </ThemedButton >
    )
};



export default Button;
