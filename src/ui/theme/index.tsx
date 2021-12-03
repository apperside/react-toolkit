import * as CSS from "csstype";
import deepmerge from "deepmerge";
import React, { useMemo } from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ObjectOrArray, Theme, ThemeBorders, ThemeBorderStyles, ThemeBorderWidths, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeFontWeights, ThemeLetterSpacings, ThemeLineHeights, ThemeRadii, ThemeShadows, ThemeSizes, ThemeSpaces, ThemeZIndices } from "styled-system";
import { ButtonTheme, buttonTheme } from "../atoms/Button/Button.theme";
import { TextTheme, textTheme } from "../atoms/Text/Text.theme";
import { textInputTheme, TextInputTheme } from "../atoms/TextInput/TextInput.theme";
import { bordersMap, borderStylesMap, borderWidthsMap } from "./styleguide/borders";
import breakpoints, { baseMediaQueries, breakpointsMap, MediaQueries } from "./styleguide/breakpoints";
import { colorsMap } from "./styleguide/colors";
import { radiisMap } from "./styleguide/radii";
import { shadowsMap } from "./styleguide/shadows";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";
import { fontSizesMap, fontsMap, fontWeightsMap, letterSpacingsMap, lineHeightsMap } from "./styleguide/typography";
import { zIndicesMap } from "./styleguide/zIndices";
export * from "./styleguide/breakpoints";
export { darkTheme as default, lightTheme };
export type PropsWithVariant<T> = { variant?: T }

export type CursorProps = {
    cursor?: CSS.Property.Cursor
};
export const buildObjectOrArray = (obj: any) => {
    const result: any = [];
    Object.keys(obj).forEach((objKey) => {
        /**
         * By populating an array can cause unwanted side effect:
         * for example if we write width={1} we expect to be 100%, but
         * what will happen is that the second item in sizes array will be taken.
         * Since we use only aliases, we don't need array values
         * 
         */
        // result.push(obj[objKey]);
        // aliases
        (result as any)[objKey] = obj[objKey];
    });
    return result
}

export const buildMediaQueries = (breakpoints: ThemeBreakpoints): MediaQueries => {
    // console.log("building mediaqueris", breakpoints)
    const mediaqueries: MediaQueries = {} as MediaQueries;
    Object.keys(breakpoints).forEach((breakpointKey) => {
        const typedKey = breakpointKey as keyof ThemeBreakpoints;
        mediaqueries[typedKey] = `@media screen and (min-width:${breakpoints[typedKey]})`;
    });
    return {
        ...baseMediaQueries,
        ...mediaqueries
    }
}

export interface CustomComponentsTheme {
    button: ButtonTheme
    text: TextTheme
    textInput: TextInputTheme
    // textInput: ThemedComponentWithVariants<TextInputStyleProps, TextInputVariants>;
}
export type VariantProps<Props> = Props & { [key in CSS.Pseudos]?: Props }
declare module 'styled-components' {
    // export interface DefaultTheme extends CustomTheme {
    //     // colors: ThemeColors;
    //     // fonts: Array<string>;
    //     // space: Array<number>;
    //     // fontSizes: Array<number>;
    //     // radii: Array<number>;
    // }
    export interface DefaultTheme extends Theme, CustomComponentsTheme {
        name: string
        space: ObjectOrArray<CSS.Property.Margin<number | string>, keyof ThemeSpaces> | Partial<ThemeSpaces>;
        fontSizes: ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontSizes> | Partial<ThemeFontSizes>;
        colors: ObjectOrArray<CSS.Property.Color, keyof ThemeColors> | Partial<ThemeColors>;
        fonts: ObjectOrArray<CSS.Property.FontFamily, keyof ThemeFontFamilies> | Partial<ThemeFontFamilies>;
        fontWeights: ObjectOrArray<CSS.Property.FontWeight, keyof ThemeFontWeights> | Partial<ThemeFontWeights>;
        lineHeights: ObjectOrArray<CSS.Property.LineHeight, keyof ThemeLineHeights> | Partial<ThemeLineHeights>;
        letterSpacings: ObjectOrArray<CSS.Property.LetterSpacing, keyof ThemeLetterSpacings> | Partial<ThemeLetterSpacings>;
        sizes: Partial<ObjectOrArray<CSS.Property.Height<number | string> | CSS.Property.Width<number | string>, keyof ThemeSizes>> | Partial<ThemeSizes>;
        borders: ObjectOrArray<CSS.Property.Border, keyof ThemeBorders> | Partial<ThemeBorders>;
        borderWidths: ObjectOrArray<CSS.Property.BorderWidth, keyof ThemeBorderWidths> | Partial<ThemeBorderWidths>;
        borderStyles: ObjectOrArray<CSS.Property.Border, keyof ThemeBorderStyles> | Partial<ThemeBorderStyles>;
        radii: ObjectOrArray<CSS.Property.BorderRadius, keyof ThemeRadii> | Partial<ThemeRadii>;
        shadows: ObjectOrArray<CSS.Property.BoxShadow, keyof ThemeShadows> | Partial<ThemeShadows>;
        zIndices: ObjectOrArray<CSS.Property.ZIndex, keyof ThemeZIndices> | Partial<ThemeZIndices>;
        breakpoints: ObjectOrArray<string, keyof ThemeBreakpoints> | Partial<ThemeBreakpoints>;
        mediaQueries: MediaQueries
        disableStyledSystemCache?: boolean;
    }
}

export const baseTheme: DefaultTheme = {
    name: "default",
    space: buildObjectOrArray(spacesMap),
    fontSizes: buildObjectOrArray(fontSizesMap),
    colors: buildObjectOrArray(colorsMap),
    fonts: buildObjectOrArray(fontsMap),
    fontWeights: buildObjectOrArray(fontWeightsMap),
    lineHeights: buildObjectOrArray(lineHeightsMap),
    letterSpacings: buildObjectOrArray(letterSpacingsMap),
    sizes: buildObjectOrArray(sizesMap),
    borders: buildObjectOrArray(bordersMap),
    borderWidths: buildObjectOrArray(borderWidthsMap),
    borderStyles: buildObjectOrArray(borderStylesMap),
    radii: buildObjectOrArray(radiisMap),
    shadows: buildObjectOrArray(shadowsMap),
    zIndices: buildObjectOrArray(zIndicesMap),
    // space: buildObjectOrArray(spacesMap),
    breakpoints,
    mediaQueries: buildMediaQueries(breakpointsMap),
    // mediaQueries: mediaQuery,
    // fontSizes:buildObjectOrArray(fontSizesMap),
    // fonts,
    // sizes,
    // borderWidths,
    // borders,
    // colors,
    // // disableStyledSystemCache: true,
    button: buttonTheme,
    text: textTheme,
    textInput: textInputTheme
};

export interface CustomTheme extends DefaultTheme {

}
type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export const customTheme: DeepPartial<DefaultTheme> = {
    name: "custom",
    button: {
        // color: "white",
        // variants: {
        //     primary: {
        //         color: "white",
        //         backgroundColor: "primary",
        //         borderRadius: 0
        //     }
        // }
    },
    text: {
        // color: "black",

    },
    textInput: {
        variants: {
            primary: {

            }
        }
    }
}


const lightTheme: DefaultTheme = {
    ...baseTheme,
    name: 'Light Theme',
    // buttons: {
    //     primary: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.blue,
    //     },
    //     secondary: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.purple,
    //     },
    //     danger: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.tomato,
    //     },
    // },
    // buttonSizes: {
    //     small: {
    //         fontSize: baseTheme.fontSizes[0],
    //         padding: `10px 16px`,
    //     },
    //     medium: {
    //         fontSize: baseTheme.fontSizes[1],
    //         padding: `11px 20px`,
    //     },
    //     large: {
    //         fontSize: baseTheme.fontSizes[2],
    //         padding: `12px 24px`,
    //     },
    // },
};

const darkTheme: DefaultTheme = {
    ...baseTheme,
    name: 'Dark Theme',
    // buttons: {
    //     primary: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.primary,
    //     },
    //     secondary: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.secondary,
    //     },
    //     danger: {
    //         color: 'white',
    //         backgroundColor: baseTheme.colors.danger,
    //     },
    // },
    // buttonSizes: {
    //     small: {
    //         fontSize: baseTheme.fontSizes[0],
    //         padding: `10px 16px`,
    //     },
    //     medium: {
    //         fontSize: baseTheme.fontSizes[1],
    //         padding: `11px 20px`,
    //     },
    //     large: {
    //         fontSize: baseTheme.fontSizes[2],
    //         padding: `12px 24px`,
    //     },
    // },
};



interface ThemeProviderPropsProps {
    children: React.ReactNode;
    theme?: Partial<DefaultTheme>;
}




export const ThemeProvider: React.FC<ThemeProviderPropsProps> = ({ children, theme }) => {

    // console.log("render theme provider")
    const mergedTheme = useMemo(() => {


        const mergedColors = buildObjectOrArray(deepmerge(colorsMap, theme?.colors ?? {}));
        const mergedSpaces = buildObjectOrArray(deepmerge(spacesMap, theme?.space ?? {}));
        const mergedSizes = buildObjectOrArray(deepmerge(sizesMap, theme?.sizes ?? {}));
        const mergedBreakpoints = buildObjectOrArray(deepmerge(breakpointsMap, theme?.breakpoints ?? {}));
        const mergedFontSizes = buildObjectOrArray(deepmerge(fontSizesMap, theme?.fontSizes ?? {}));
        const mergedFonts = buildObjectOrArray(deepmerge(fontsMap, theme?.fonts ?? {}));
        const mergedBorders = buildObjectOrArray(deepmerge(bordersMap, theme?.borders ?? {}));
        const mergedBorderWidths = buildObjectOrArray(deepmerge(borderWidthsMap, theme?.borderWidths ?? {}));
        const mergedBordersStyles = buildObjectOrArray(deepmerge(borderStylesMap, theme?.borderStyles ?? {}));
        const mergedRadiis = buildObjectOrArray(deepmerge(radiisMap, theme?.radii ?? {}));
        const mergedFontWeights = buildObjectOrArray(deepmerge(fontWeightsMap, theme?.fontWeights ?? {}));
        const mergedLineHeights = buildObjectOrArray(deepmerge(lineHeightsMap, theme?.lineHeights ?? {}));
        const mergedLetterSpacings = buildObjectOrArray(deepmerge(radiisMap, theme?.radii ?? {}));
        const mergedShadows = buildObjectOrArray(deepmerge(shadowsMap, theme?.shadows ?? {}));
        const mergedzIndices = buildObjectOrArray(deepmerge(zIndicesMap, theme?.zIndices ?? {}));

        const mergedButton = deepmerge(buttonTheme, theme?.button ?? {});
        const mergedText = deepmerge(textTheme, theme?.text ?? {});
        const mergedTextInput = deepmerge(textInputTheme, theme?.textInput ?? {});

        const mediaQueries = buildMediaQueries({ ...breakpointsMap, ...theme?.breakpoints ?? {} })
        // console.log("mediaqueries are", mediaQueries)

        return {
            ...baseTheme,
            breakpoints: mergedBreakpoints,
            space: mergedSpaces,
            fontSizes: mergedFontSizes,
            colors: mergedColors,
            fonts: mergedFonts,
            fontWeights: mergedFontWeights,
            lineHeights: mergedLineHeights,
            letterSpacings: mergedLetterSpacings,
            sizes: mergedSizes,
            borders: mergedBorders,
            borderWidths: mergedBorderWidths,
            borderStyles: mergedBordersStyles,
            radii: mergedRadiis,
            shadows: mergedShadows,
            zIndices: mergedzIndices,
            // colors: mergedColors,
            // space: mergedSpaces,
            // sizes: mergedSizes,
            // fontSizes: mergedFontSizes,
            // fonts: mergedFonts,
            // borders: mergedBorders,
            // borderWidths: mergedBorderWidths,
            // borderStyles: mergedBordersStyles,
            // radii: mergedRadiis,
            mediaQueries,
            button: mergedButton,
            text: mergedText,
            textInput: mergedTextInput
        }

    }, [theme, baseTheme,
        colorsMap,
        spacesMap,
        sizesMap,
        breakpointsMap,
        fontSizesMap,
        fontsMap,
        bordersMap,
        borderWidthsMap,
        borderStylesMap,
        radiisMap]);
    console.log("feeding theme", mergedTheme)
    return <StyledThemeProvider theme={mergedTheme}> {children} </StyledThemeProvider>;
};


