import * as CSS from "csstype";
import { ThemeLetterSpacings } from "styled-system";
import { ThemeLineHeights } from "styled-system";
import { ThemeFontWeights } from "styled-system";
import { ObjectOrArray, ThemeFontFamilies, ThemeFontSizes } from "styled-system";

export const fontsMap: ThemeFontFamilies = {
  regular: "Montserrat-Regular, Helvetica, Arial, sans-serif",
  medium: "Basier Circle-Medium, Helvetica, Arial, sans-serif",
  bold: "Montserrat-Bold, Helvetica, Arial, sans-serif",
  black: "Montserrat-Black, Helvetica, Arial, sans-serif",
};
export const fonts: ObjectOrArray<CSS.Property.FontFamily, keyof ThemeFontFamilies> = [];


export const fontSizesMap: ThemeFontSizes = {
  small: 10,
  medium: 15,
  big: 24,
  huge: 50,
};

// export const fontSizes: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontSizes> = [];

export const fontWeightsMap: ThemeFontWeights = {
  thin: 200,
  normal: 400,
  bold: 700
};

// export const fontWeights: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontWeights> = [];

export const lineHeightsMap: ThemeLineHeights = {
  small: 0.8,
  normal: "normal",
  medium: 1.2,
  large: 1.5
};

export const lineHeights: ObjectOrArray<CSS.Property.LineHeight, keyof ThemeFontWeights> = [];

export const letterSpacingsMap: ThemeLetterSpacings = {
  normal: "normal",
  medium: "0.1rem",
  large: "0.4rem"
};

// export const letterSpacings: ObjectOrArray<CSS.Property.LineHeight, keyof ThemeFontWeights> = [];
