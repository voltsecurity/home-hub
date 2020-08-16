import { doorActionTypes } from './door.types';

const INITIAL_STATE = {
    doorState: 'locked'
}

const doorReducer = (state=INITIAL_STATE, action) => { 
    switch (action.type) {
        case doorActionTypes.SET_DOOR_STATE:
        return {
            ...state,
            doorState: action.payload
        }
        default:
            return state;
    }
}

export default doorReducer;