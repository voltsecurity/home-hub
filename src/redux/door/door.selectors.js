import { createSelector } from 'reselect';

const selectDoor = state => state.door;

export const selectDoorState = createSelector(
    [selectDoor],
    door => door.doorState
);