import { createSelector } from 'reselect';

const selectAccess = state => state.access;

export const selectAccessCategory = createSelector(
    [selectAccess],
    access => access.category
);

export const selectAccessItems = createSelector(
    [selectAccess],
    access => access.items
);

export const selectAccessStatus = createSelector(
    [selectAccess],
    access => access.status
);

export const selectAccessActions = createSelector(
    [selectAccess],
    access => access.actions
);