import { CCTV_ASSET_DATA } from '../../database/asset-data';

const INITIAL_STATE = {
    category: CCTV_ASSET_DATA.category,
    items: CCTV_ASSET_DATA.items,
    status: CCTV_ASSET_DATA.status,
    actions: CCTV_ASSET_DATA.actions
}

const cctvReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default cctvReducer;