import { ASSET_DATA } from '../../database/asset-data-normalised';

const INITIAL_STATE = {
    assetCollection: ASSET_DATA
}

const assetReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default assetReducer;