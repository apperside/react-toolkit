import * as CSS from "csstype";
import { DefaultBreakpoints as BP } from "src/ui/theme/styleguide/breakpoints";


export * from "./ui";
export * from "./hooks";
export * from "./networking"
export { ThemeProvider } from 'src/ui/theme';

export type DefaultBreakpoints = BP



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
		button: string | number;
		stepDescription: string | number;

	}
}

// export interface TextVariants {
// 	regular: VariantProps<TextStyleProps>
// 	bold: VariantProps<TextStyleProps>
// 	medium: VariantProps<TextStyleProps>
// 	black: VariantProps<TextStyleProps>
// }