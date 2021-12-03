export { Asset } from "./Asset";
console.log("process 2", process.cwd())
const icButtonWhite = require(process.cwd() + "/assets/images/icButtonWhite/icButtonWhite.png");
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
