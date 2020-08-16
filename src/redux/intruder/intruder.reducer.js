import { INTRUDER_ASSET_DATA } from '../../database/asset-data';

const INITIAL_STATE = {
    category: INTRUDER_ASSET_DATA.category,
    items: INTRUDER_ASSET_DATA.items,
    status: INTRUDER_ASSET_DATA.status,
    actions: INTRUDER_ASSET_DATA.actions
}

const intruderReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default intruderReducer;