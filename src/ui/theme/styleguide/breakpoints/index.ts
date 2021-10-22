


import { BreakpointNames } from "styled-system";
import { ThemeBreakpoints } from "styled-system";
import { ObjectOrArray } from "styled-system";



export interface DefaultBreakpoints extends ThemeBreakpoints { }
/**
 * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
 */
export const breakpointsMap: DefaultBreakpoints = {
  default: "600px",
  // mobileS: "0px",
  // mobileM: "375px",
  // mobileL: "425px",
  tablet: "1024px",
  // laptop: "1024px",
  // laptopL: "1440px",
  desktop: "2048px",
  // desktopL: "2560px"
};

/**
 * create breakpoints aliases 
 * The final structure will be an array which also has named properties
 * 
 * https://styled-system.com/responsive-styles/#using-objects
 * 
 */
// export type BreakpointsThemeType = string[] & { [key in keyof ThemeBreakpoints]?: string }

const breakpoints: ObjectOrArray<number | string | symbol, keyof DefaultBreakpoints> = [];

type MediaQueryMap = { [key in keyof DefaultBreakpoints]: string };
const mediaqueries: MediaQueryMap = {} as MediaQueryMap;
/**
 * generate breakpoints in mobile first approach
 */

Object.keys(breakpointsMap).forEach((breakpointKey) => {
  const typedKey = breakpointKey as keyof DefaultBreakpoints;
  breakpoints.push(breakpointsMap[typedKey]);
  // breakpoint aliases

  breakpoints[typedKey] = breakpointsMap[typedKey];
  // media query aliases

  mediaqueries[typedKey] = `@media screen and (min-width:${breakpointsMap[typedKey]})`;
});

type MediaQueries = {
  down: (breakpoint: BreakpointNames) => string;
  up: (breakpoint: BreakpointNames) => string;
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => string;
} & { [key in BreakpointNames]: string }

export const mediaQuery: MediaQueries = {
  down: (breakpoint: BreakpointNames) => {
    return `@media screen and (max-width:  ${breakpointsMap[breakpoint]})`;
  },
  up: (breakpoint: BreakpointNames) => {
    return `@media screen and (min-width:  ${breakpointsMap[breakpoint]})`;
  },
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => {
    return `@media (max-width:${breakpointsMap[breakpointMax]}) and (min-width:${breakpointsMap[breakpointMin]})`;
  },
  ...mediaqueries
};

export default breakpoints;


