export { Asset } from "./Asset";

export interface AppImages {}

export let icons = {};

export type AssetName = keyof AppImages;

const updateAssets = (assets: { [key: string]: any }) => {
  icons = { ...assets };
};

export const AssetsUtils = {
  updateAssets,
};

