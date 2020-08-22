import { assetActionTypes } from './asset.types';

export const setAssetItems = items => ({
    type: assetActionTypes.SET_ASSET_ITEMS,
    payload: items
});