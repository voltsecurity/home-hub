import { createSelector } from 'reselect';

const selectAsset = state => state.asset;

export const selectAssetItemDB = createSelector(
    [selectAsset],
    asset => asset.itemDB
);

export const selectAssetActions = createSelector(
    [selectAssetItemDB],
    itemDB => itemDB.actions
);

export const selectAssetStatus = createSelector(
    [selectAssetItemDB],
    itemDB => itemDB.status
);
