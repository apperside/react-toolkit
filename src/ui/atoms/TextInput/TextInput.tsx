import React, { useCallback } from 'react';
import { PropsOf } from "../../../typeUtils";
import { TextInputProps, ThemedTextInput } from './TextInput.styled';

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

    return (
        <ThemedTextInput variant={variant} onKeyDown={listener} {...props} />
    )
};

export default TextInput;
