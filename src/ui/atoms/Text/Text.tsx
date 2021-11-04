import React from 'react';
import { PropsOf } from "../../../typeUtils";
import { TextProps, ThemedText } from './Text.styled';

export const Text: React.FC<PropsOf<typeof ThemedText> & TextProps> = ({
    variant = "regular",
    ...props
}) => {
    return (
        <ThemedText variant={variant} {...props}  >
            {props.children}
        </ThemedText >
    )
};

export default Text;
