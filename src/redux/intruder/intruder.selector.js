import { createSelector } from 'reselect';

const selectIntruder = state => state.intruder;

export const selectIntruderCategory = createSelector(
    [selectIntruder],
    intruder => intruder.category
);

export const selectIntruderItems = createSelector(
    [selectIntruder],
    intruder => intruder.items
);

export const selectIntruderStatus = createSelector(
    [selectIntruder],
    intruder => intruder.status
);

export const selectIntruderActions = createSelector(
    [selectIntruder],
    intruder => intruder.actions
);