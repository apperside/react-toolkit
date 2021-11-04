import * as CSS from "csstype";


export * from "./ui";
export * from "./hooks";
export * from "./networking"
export { ThemeProvider } from 'src/ui/theme';


declare module "styled-system" {

	export interface ThemeBreakpoints {
		default: string;
		// mobileS: "0px",
		// mobileM: "375px",
		// mobileL: "425px",
		tablet: string;
		// laptop: "1024px",
		// laptopL: "1440px",
		desktop: string;
		// desktopL: "2560px"
	}
}

declare module "styled-system" {

	export interface ThemeBorders {

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
		NONE: CSS.Property.BoxShadow | CSS.Property.TextShadow
		LIGHT: CSS.Property.BoxShadow | CSS.Property.TextShadow
		MEDIUM: CSS.Property.BoxShadow | CSS.Property.TextShadow
		STRONG: CSS.Property.BoxShadow | CSS.Property.TextShadow
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
		regular: string;
		medium: string;
		bold: string;
		black: string;
	}

	export interface ThemeFontSizes {
		small: string | number;
		medium: string | number;
		big: string | number;
		huge: string | number;
	}

	export interface ThemeFontWeights {
		thin: CSS.Property.FontWeight;
		normal: CSS.Property.FontWeight;
		bold: CSS.Property.FontWeight;
	}

	export interface ThemeLineHeights {
		small: CSS.Property.LineHeight;
		normal: CSS.Property.LineHeight;
		medium: CSS.Property.LineHeight;
		large: CSS.Property.LineHeight;
	}

	export interface ThemeLetterSpacings {
		normal: CSS.Property.LineHeight;
		medium: CSS.Property.LineHeight;
		large: CSS.Property.LineHeight;
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