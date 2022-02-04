import * as CSS from "csstype";


export * from "./ui";
export * from "./hooks";
export { ThemeProvider } from 'src/ui/theme';


declare module "styled-system" {

	export interface ThemeBreakpoints {
		default: string;
		tablet: string;
		desktop: string;
	}
}

declare module "styled-system" {

	export interface ThemeBorders {
		none: CSS.Property.Border;
		"1px": CSS.Property.Border;
		"2px": CSS.Property.Border;
		"4px": CSS.Property.Border;
		"8px": CSS.Property.Border;

	}


	export interface ThemeBorderWidths {

	}

	export interface ThemeBorderStyles {

	}
}

declare module "styled-system" {

	export interface ThemeColors {
		primary: string;
		secondary: string;
		link: string;
		success: string;
		warning: string;
		error: string;
	}
}


declare module "styled-system" {

	export interface ThemeRadii {
		NONE: CSS.Property.BorderRadius<number>;
		XS: CSS.Property.BorderRadius<number>
		S: CSS.Property.BorderRadius<number>
		M: CSS.Property.BorderRadius<number>
		L: CSS.Property.BorderRadius<number>
		XL: CSS.Property.BorderRadius<number>
		ROUNDED: CSS.Property.BorderRadius<number>
	}
}

declare module "styled-system" {
	export interface ThemeShadows {
		xs: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		sm: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		base: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		md: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		lg: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		xl: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		'2xl': CSS.Property.BoxShadow | CSS.Property.TextShadow;
		outline: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		inner: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		none: CSS.Property.BoxShadow | CSS.Property.TextShadow;
		'dark-lg': CSS.Property.BoxShadow | CSS.Property.TextShadow;
	}
}


/**
 * Values used for margins and paddings
 */
declare module "styled-system" {

	export interface ThemeSizes {
		NONE: CSS.Property.Margin<number | string>;
		XS: CSS.Property.Margin<number | string>;
		S: CSS.Property.Margin<number | string>;
		M: CSS.Property.Margin<number | string>;
		L: CSS.Property.Margin<number | string>;
		XL: CSS.Property.Margin<number | string>;
		XXL: CSS.Property.Margin<number | string>;
	}
}

/**
 * Values used for 
 * 
 * width, height, minWidth, maxWidth, minHeight, maxHeight, size
 */
declare module "styled-system" {

	export interface ThemeSpaces {
		NONE: CSS.Property.Margin<number | string>;
		XS: CSS.Property.Margin<number | string>;
		S: CSS.Property.Margin<number | string>;
		M: CSS.Property.Margin<number | string>;
		L: CSS.Property.Margin<number | string>;
		XL: CSS.Property.Margin<number | string>;
		XXL: CSS.Property.Margin<number | string>;
	}
}

declare module "styled-system" {

	export interface ThemeFontFamilies {
		heading: string;
		body: string;
		mono: string;
	}

	export interface ThemeFontSizes {
		smaller: string | number;
		small: string | number;
		regular: string | number;
		medium: string | number;
		large: string | number;
		huge: string | number;
	}

	export interface ThemeFontWeights {
		hairline: CSS.Property.FontWeight;
		thin: CSS.Property.FontWeight;
		light: CSS.Property.FontWeight;
		normal: CSS.Property.FontWeight;
		medium: CSS.Property.FontWeight;
		semibold: CSS.Property.FontWeight;
		bold: CSS.Property.FontWeight;
		extrabold: CSS.Property.FontWeight;
		black: CSS.Property.FontWeight;

	}

	export interface ThemeLineHeights {
		normal: CSS.Property.LineHeight;
		none: CSS.Property.LineHeight;
		shorter: CSS.Property.LineHeight;
		short: CSS.Property.LineHeight;
		base: CSS.Property.LineHeight;
		tall: CSS.Property.LineHeight;
		taller: CSS.Property.LineHeight;
		"3": CSS.Property.LineHeight;
		"4": CSS.Property.LineHeight;
		"5": CSS.Property.LineHeight;
		"6": CSS.Property.LineHeight;
		"7": CSS.Property.LineHeight;
		"8": CSS.Property.LineHeight;
		"9": CSS.Property.LineHeight;
		"10": CSS.Property.LineHeight;
	}

	export interface ThemeLetterSpacings {
		tighter: CSS.Property.LineHeight;
		tight: CSS.Property.LineHeight;
		normal: CSS.Property.LineHeight;
		wide: CSS.Property.LineHeight;
		wider: CSS.Property.LineHeight;
		widest: CSS.Property.LineHeight;
	}
}

declare module "styled-system" {

	export interface ThemeZIndices {
		NONE: CSS.Property.ZIndex
		Z1: CSS.Property.ZIndex
		Z2: CSS.Property.ZIndex
		Z3: CSS.Property.ZIndex
		Z4: CSS.Property.ZIndex
		Z5: CSS.Property.ZIndex
	}
}