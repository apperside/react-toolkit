import { ThemeSpaces } from "styled-system";
import * as CSS from "csstype";
import { ObjectOrArray } from "styled-system";


export const spacesMap: ThemeSpaces = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64
};

export const spaces: ObjectOrArray<CSS.Property.Margin<number | string>, keyof ThemeSpaces> = [];

// Object.keys(spacesMap).forEach((spaceKey) => {
//   // (spaces as (CSS.Property.Margin<number | string>)[]).push(spacesMap[spaceKey]);
//   //aliases
//   spaces[spaceKey as keyof ThemeSpaces] = spacesMap[spaceKey as keyof ThemeSpaces];
// });