export { Asset } from "./Asset";
const icButtonWhite = require("../../../assets/images/icButtonWhite/icButtonWhite.png");
export interface AppImages {
	icButtonWhite: string
}

export const icons = {
	icButtonWhite,
}


export type AssetName = keyof AppImages




const updateAssets = (assets: any) => {
	Object.keys(assets).forEach(key => {
		icons[key] = assets[key];
	});
};

export const AssetsUtils = {
	updateAssets
}
