import React from 'react';
import { TextProps, ThemedText } from './Text.styled';

export const Text: React.FC<TextProps> = ({
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
