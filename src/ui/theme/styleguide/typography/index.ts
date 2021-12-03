import * as CSS from "csstype";
import { ThemeLetterSpacings } from "styled-system";
import { ThemeLineHeights } from "styled-system";
import { ThemeFontWeights } from "styled-system";
import { ObjectOrArray, ThemeFontFamilies, ThemeFontSizes } from "styled-system";

export const fontsMap: ThemeFontFamilies = {
  heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};
export const fonts: ObjectOrArray<CSS.Property.FontFamily, keyof ThemeFontFamilies> = [];


export const fontSizesMap: ThemeFontSizes = {
  smaller: '0.75rem',
  small: '0.875rem',
  regular: '1rem',
  medium: '1.125rem',
  large: '1.3rem',
  huge: '1.5rem'
};

// export const fontSizes: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontSizes> = [];

export const fontWeightsMap: ThemeFontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// export const fontWeights: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontWeights> = [];

export const lineHeightsMap: ThemeLineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
};

export const lineHeights: ObjectOrArray<CSS.Property.LineHeight, keyof ThemeFontWeights> = [];

export const letterSpacingsMap: ThemeLetterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// export const letterSpacings: ObjectOrArray<CSS.Property.LineHeight, keyof ThemeFontWeights> = [];
