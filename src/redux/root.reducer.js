import { combineReducers } from 'redux';

import doorReducer from './door/door.reducer';

export default combineReducers({
    door: doorReducer
})