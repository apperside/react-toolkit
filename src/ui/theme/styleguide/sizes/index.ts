import { ThemeSizes } from "styled-system";
import * as CSS from "csstype";
import { ObjectOrArray } from "styled-system";


export const sizesMap: ThemeSizes = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 12,
  XL: 16,
  XXL: 20
};


export const sizes: ObjectOrArray<CSS.Property.Height<number | string> | CSS.Property.Width<number | string>, keyof ThemeSizes> = [];

Object.keys(sizesMap).forEach((sizeKey) => {
  (sizes as (CSS.Property.Height<number | string> | CSS.Property.Width<number | string>)[]).push(sizesMap[sizeKey]);
  // aliases
  sizes[sizeKey as keyof ThemeSizes] = sizesMap[sizeKey as keyof ThemeSizes];
});