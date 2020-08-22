import { combineReducers } from 'redux';

import doorReducer from './door/door.reducer';
import assetReducer from './asset/asset.reducer';


export default combineReducers({
    door: doorReducer,
    asset: assetReducer
})