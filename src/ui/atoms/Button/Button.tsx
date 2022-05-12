import React, { useMemo } from "react";
import { PropsOf } from "../../../typeUtils";
import { DefaultTheme, StyledComponent, useTheme } from "styled-components";
import { ButtonProps, ThemedButton } from "./Button.styled";
import { Loader } from "../Loader/Loader";
import { Asset, AssetName } from "../Asset";
import Text from "../Text/Text";
import deepmerge from "deepmerge";
/**
 * Button UI component for user interaction
 */
export const BaseButtonComponent: React.FC<
  PropsOf<typeof ThemedButton> & ButtonProps
> = ({
  variant = "primary",
  label,
  isLoading,
  iconPosition = "left",
  icon,
  iconSize = 12,
  ...props
}) => {
  const theme = useTheme();
  const buttonTheme = theme.button;

  const baseTheme = useMemo(() => {
    const { variants, ...restOfTheme } = buttonTheme;
    return restOfTheme;
  }, [buttonTheme]);

  const variantTheme = useMemo(() => {
    const { variants, ...restOfTheme } = buttonTheme;
    console.log("varaint theme ", variants[variant]);
    return variants[variant]!;
  }, [buttonTheme, variant]);

  // const buttonThemeProps = useMemo(() => {
  //     const result = deepmerge(baseTheme, variantTheme, { clone: true });
  //     console.log("button theme deep merge", result)
  //     return result;
  // }, [baseTheme, variantTheme])

  const iconComponent = useMemo(() => {
    if (typeof icon === "string") {
      if (iconPosition === "right")
        return <Asset name={icon as AssetName} ml={"M"} height={iconSize} />;
      return <Asset name={icon as AssetName} mr={"M"} height={iconSize} />;
    }
    return icon;
  }, [icon, iconSize, iconPosition]);

  const customChildren = useMemo(() => {
    if (label) {
      return (
        <Text {...baseTheme.textStyle} {...variantTheme.textStyle}>
          {label}
        </Text>
      );
    }
    if (props.children && typeof props.children === "string") {
      return (
        <Text {...baseTheme.textStyle} {...variantTheme.textStyle}>
          {props.children}
        </Text>
      );
    }
    return props.children;
  }, [baseTheme.textStyle, label, props.children, variantTheme.textStyle]);
  return (
    <ThemedButton {...baseTheme} variant={variant} {...props}>
      {isLoading && (
        <Loader
          style={{ alignSelf: "center", justifyContent: "center" }}
          message=" "
          loaderSize={14}
          textSize={14}
        />
      )}
      {!isLoading && !!icon && iconPosition === "left" && iconComponent}
      {!isLoading && customChildren}
      {!isLoading && !!icon && iconPosition === "right" && iconComponent}
    </ThemedButton>
  );
};

export const Button = BaseButtonComponent as StyledComponent<
  "button",
  DefaultTheme,
  PropsOf<typeof ThemedButton> & ButtonProps,
  never
>;

export default Button; // as StyledComponent<"button", DefaultTheme, PropsOf<typeof ThemedButton> & ButtonProps, never>;

