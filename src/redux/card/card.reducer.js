const INITIAL_STATE = {
    actionsHidden: true
}

const cardReducer = (state=INITIAL_STATE, action) => { 
    switch (action.type) {
        case 'SET_ACTIONS_HIDDEN':
        return {
            ...state,
            actionsHidden: action.payload
        }
        default:
            return state;
    }
}

export default cardReducer;