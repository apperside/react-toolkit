import React from "react";
import { DefaultTheme, StyledComponent, useTheme } from "styled-components";
import { PropsOf } from "../../../typeUtils";
import { TextProps, ThemedText } from "./Text.styled";
import { useMemo } from "react";

const BaseTextComponent: React.FC<PropsOf<typeof ThemedText> & TextProps> = ({
  variant = "regular",
  underlined,
  style,
  ...props
}) => {
  const theme = useTheme();
  const textTheme = theme.text;

  const baseTheme = useMemo(() => {
    const { variants, ...restOfTheme } = textTheme;
    return restOfTheme;
  }, [textTheme]);

  // const variantTheme = useMemo(() => {
  //     const { variants, ...restOfTheme } = textTheme;
  //     return variants[variant]!;
  // }, [textTheme, variant])

  // const textThemeProps = useMemo(() => {
  //     const result = deepmerge(baseTheme, variantTheme, { clone: true });
  //     console.log("button theme deep merge", result)
  //     return result;
  // }, [baseTheme, variantTheme])

  const finalStyle = useMemo(() => {
    if (underlined) {
      return { textDecoration: "underline", ...style };
    }
    return style;
  }, [style, underlined]);

  return (
    <ThemedText {...baseTheme} variant={variant} style={finalStyle} {...props}>
      {props.children}
    </ThemedText>
  );
};

export const Text = BaseTextComponent as StyledComponent<
  "span",
  DefaultTheme,
  PropsOf<typeof ThemedText> & TextProps,
  never
>;

export default Text as StyledComponent<
  "span",
  DefaultTheme,
  PropsOf<typeof ThemedText> & TextProps,
  never
>;

