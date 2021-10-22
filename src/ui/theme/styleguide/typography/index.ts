import * as CSS from "csstype";
import { ObjectOrArray, ThemeFontFamilies, ThemeFontSizes } from "styled-system";

export const fontFamiliesMap: ThemeFontFamilies = {
  regular: "Montserrat-Regular, Helvetica, Arial, sans-serif",
  medium: "Basier Circle-Medium, Helvetica, Arial, sans-serif",
  bold: "Montserrat-Bold, Helvetica, Arial, sans-serif",
  black: "Montserrat-Black, Helvetica, Arial, sans-serif",
};
export const fonts: ObjectOrArray<CSS.Property.FontFamily, keyof ThemeFontFamilies> = [];

Object.keys(fontFamiliesMap).forEach((fontFamilyKey) => {
  // fonts.push(fontFamilies[fontFamilyKey]);
  // aliases
  fonts[fontFamilyKey] = fontFamiliesMap[fontFamilyKey];
});


export const fontSizesMap: ThemeFontSizes = {
  small: 10,
  medium: 15,
  big: 24,
  huge: 50,
  button: 30,
  stepDescription: 55
};

export const fontSizes: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontSizes> = [];
Object.keys(fontSizesMap).forEach((fontSizeKey) => {
  // fontSizes.push(fontSizeMap[fontSizeKey]);
  fontSizes[fontSizeKey] = fontSizesMap[fontSizeKey];
});