import { ObjectOrArray } from "styled-system";
import { ThemeColors } from "styled-system";
import * as CSS from 'csstype';

export const colorsMap: ThemeColors = {
  primary: "#025D92",
  secondary: "#ff618d",
  link: "#1890ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#e84118"
};



export const colors: ObjectOrArray<CSS.Property.Color, keyof ThemeColors> = [];

Object.keys(colorsMap).forEach((colorKey) => {
  // (colors as (CSS.Property.Color)[]).push(colorsMap[colorKey]);
  // aliases
  colors[colorKey as keyof ThemeColors] = colorsMap[colorKey as keyof ThemeColors];
});