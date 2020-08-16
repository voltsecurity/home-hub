import { ACCESS_ASSET_DATA } from '../../database/asset-data';

const INITIAL_STATE = {
    category: ACCESS_ASSET_DATA.category,
    items: ACCESS_ASSET_DATA.items,
    status: ACCESS_ASSET_DATA.status,
    actions: ACCESS_ASSET_DATA.actions
}

const accessReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default accessReducer;