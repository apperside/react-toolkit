import React from 'react';
import { PropsOf } from "src/typeUtils";
import { TextInputProps, ThemedTextInput } from './TextInput.styled';

export const TextInput: React.FC<PropsOf<typeof ThemedTextInput>> = ({
    variant = "primary",
    ...props
}) => {
    return (
        <ThemedTextInput variant={variant} value="ciao" {...props} />
    )
};

export default TextInput;
