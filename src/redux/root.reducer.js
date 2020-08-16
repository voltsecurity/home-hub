import { combineReducers } from 'redux';

import doorReducer from './door/door.reducer';
import assetReducer from './asset/asset.reducer';
import accessReducer from './access/access.reducer';
import cctvReducer from './cctv/cctv.reducer';
import intruderReducer from './intruder/intruder.reducer';

export default combineReducers({
    assets: assetReducer,
    access: accessReducer,
    cctv: cctvReducer,
    door: doorReducer,
    intruder: intruderReducer
})