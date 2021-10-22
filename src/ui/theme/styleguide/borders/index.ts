import { ObjectOrArray, ThemeBorders, ThemeBorderWidths } from "styled-system";
import * as CSS from "csstype";
import { ThemeBorderStyles } from "styled-system";
declare module "styled-system" {

  export interface ThemeBorders {

  }


  export interface ThemeBorderWidths {

  }

  export interface ThemeBorderStyles {

  }
}

export const themeBordersMap: ThemeBorders = {

};

export const themeBorderWidthsMap: ThemeBorderWidths = {

};

export const themeBorderStylesMap: ThemeBorderStyles = {

};


export const bordersMap: ObjectOrArray<CSS.Property.Border, keyof ThemeBorders> = []

Object.keys(themeBordersMap).forEach((borderKey) => {
  bordersMap.push(themeBordersMap[borderKey]);
  // aliases
  bordersMap[borderKey as keyof ThemeBorders] = themeBordersMap[borderKey as keyof ThemeBorders];
});

export const borderWidthsMap: ObjectOrArray<CSS.Property.BorderWidth, keyof ThemeBorderWidths> = [];

Object.keys(themeBorderWidthsMap).forEach((borderWidthKey) => {
  borderWidthsMap.push(themeBorderWidthsMap[borderWidthKey as keyof ThemeBorders]);
  // aliases
  borderWidthsMap[borderWidthKey] = themeBorderWidthsMap[borderWidthKey as keyof ThemeBorders];
});


export const borderStylesMap: ObjectOrArray<CSS.Property.BorderStyle, keyof ThemeBorderStyles> = [];

Object.keys(themeBorderStylesMap).forEach((borderStyleKey) => {
  borderStylesMap.push(themeBorderStylesMap[borderStyleKey as keyof ThemeBorders]);
  // aliases
  borderStylesMap[borderStyleKey] = themeBorderStylesMap[borderStyleKey as keyof ThemeBorders];
});
