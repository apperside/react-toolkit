import * as CSS from "csstype";
import deepmerge from "deepmerge";
import React, { useMemo } from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ObjectOrArray, Theme, ThemeBorders, ThemeBorderStyles, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeRadii, ThemeSizes, ThemeSpaces } from "styled-system";
import { ButtonTheme, buttonTheme } from "../atoms/Button/Button.theme";
import { TextTheme, textTheme } from "../atoms/Text/Text.theme";
import { textInputTheme, TextInputTheme } from "../atoms/TextInput/TextInput.theme";
import { borderWidthsMap, bordersMap, borderStylesMap } from "./styleguide/borders";
import breakpoints, { breakpointsMap } from "./styleguide/breakpoints";
import { colors, colorsMap } from "./styleguide/colors";
import { radiisMap } from "./styleguide/radii";
import { sizes, sizesMap } from "./styleguide/sizes";
import { spaces, spacesMap } from "./styleguide/spaces";
import { fontSizes, fonts, fontSizesMap, fontFamiliesMap } from "./styleguide/typography";
export * from "./styleguide/breakpoints"
export type PropsWithVariant<T> = { variant?: T }

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
        //override to remove optionality
        breakpoints: Partial<ObjectOrArray<number | string | symbol, keyof ThemeBreakpoints>>;
        mediaQueries?: { [size: string]: string };
        space: Partial<ObjectOrArray<CSS.Property.Margin<number | string>, keyof ThemeSpaces>>;
        fontSizes?: Partial<ObjectOrArray<CSS.Property.FontSize<number>, keyof ThemeFontSizes>>;
        colors: Partial<ObjectOrArray<CSS.Property.Color, keyof ThemeColors>>
        fonts?: Partial<ObjectOrArray<CSS.Property.FontFamily, keyof ThemeFontFamilies>>;
        fontWeights?: Partial<ObjectOrArray<CSS.Property.FontWeight>>;
        sizes: Partial<ObjectOrArray<CSS.Property.Height<number | string> | CSS.Property.Width<number | string>, keyof ThemeSizes>>;
        borders?: Partial<ObjectOrArray<CSS.Property.Border, keyof ThemeBorders>>;
        borderStyles?: Partial<ObjectOrArray<CSS.Property.Border, keyof ThemeBorderStyles>>;
        shadows?: Partial<ObjectOrArray<CSS.Property.BoxShadow>>;
        radii?: Partial<ObjectOrArray<CSS.Property.BorderRadius<any>, keyof ThemeRadii>>;
        zIndices?: Partial<ObjectOrArray<CSS.Property.ZIndex>>;
        colorStyles?: Partial<ObjectOrArray<CSS.StandardProperties>>;
        textStyles?: Partial<ObjectOrArray<CSS.StandardProperties>>;
        disableStyledSystemCache?: boolean;

    }
}

export interface CustomTheme extends DefaultTheme {

}type DeepPartial<T> = {
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
export const baseTheme: DefaultTheme = {
    name: "default",
    space: spaces,
    breakpoints,
    fontSizes,
    fonts,
    sizes,
    borderWidths: borderWidthsMap,
    borders: bordersMap,
    colors,
    disableStyledSystemCache: true,
    button: buttonTheme,
    text: textTheme,
    textInput: textInputTheme
};

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

export const buildObjectOrArray = (obj: any) => {
    const result: any = [];
    Object.keys(obj).forEach((objKey) => {
        result.push(obj[objKey]);
        // aliases
        (result as any)[objKey] = obj[objKey];
    });
    return result
}

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
        const mergedFonts = buildObjectOrArray(deepmerge(fontFamiliesMap, theme?.fonts ?? {}));
        const mergedBorders = buildObjectOrArray(deepmerge(bordersMap, theme?.borders ?? {}));
        const mergedBorderWidths = buildObjectOrArray(deepmerge(borderWidthsMap, theme?.borderWidths ?? {}));
        const mergedBordersStyles = buildObjectOrArray(deepmerge(borderStylesMap, theme?.borderStyles ?? {}));
        const mergedRadiis = buildObjectOrArray(deepmerge(radiisMap, theme?.radii ?? {}));

        const mergedButton = deepmerge(buttonTheme, theme?.button ?? {});
        const mergedText = deepmerge(textTheme, theme?.text ?? {});
        const mergedTextInput = deepmerge(textInputTheme, theme?.textInput ?? {});

        // fontWeights?: Partial<ObjectOrArray<CSS.Property.FontWeight>>;
        // shadows?: Partial<ObjectOrArray<CSS.Property.BoxShadow>>;
        // zIndices?: Partial<ObjectOrArray<CSS.Property.ZIndex>>;
        // colorStyles?: Partial<ObjectOrArray<CSS.StandardProperties>>;
        // textStyles?: Partial<ObjectOrArray<CSS.StandardProperties>>;



        return {
            ...baseTheme,
            breakpoints: mergedBreakpoints,
            colors: mergedColors,
            space: mergedSpaces,
            sizes: mergedSizes,
            fontSizes: mergedFontSizes,
            fonts: mergedFonts,
            borders: mergedBorders,
            borderWidths: mergedBorderWidths,
            borderStyles: mergedBordersStyles,
            radii: mergedRadiis,
            button: mergedButton,
            text: mergedText,
            textInput: mergedTextInput
        }

    }, [theme, baseTheme]);
    if (theme) {
        // const merged = deepmerge(baseTheme, theme)
        console.log("feeding theme", mergedTheme);
        return <StyledThemeProvider theme={mergedTheme}> {children} </StyledThemeProvider>;
    }
    return <StyledThemeProvider theme={darkTheme}> {children} </StyledThemeProvider>;
};

export { darkTheme as default, lightTheme };
