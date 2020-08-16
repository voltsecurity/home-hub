import { createSelector } from 'reselect';

const selectCCTV = state => state.cctv


export const selectCCTVCategory = createSelector(
    [selectCCTV],
    cctv => cctv.category
);

export const selectCCTVItems = createSelector(
    [selectCCTV],
    cctv => cctv.items
);

export const selectCCTVStatus = createSelector(
    [selectCCTV],
    cctv => cctv.status
);

export const selectCCTVActions = createSelector(
    [selectCCTV],
    cctv => cctv.actions
);