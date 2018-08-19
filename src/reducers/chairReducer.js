import {TAKE, LEAVE} from '../actions';

const initialState = {
    person : null,
    occupied : false
};

const chairReducer = (state = initialState, action) => {
    switch(action.type) {
        case TAKE :
            if (state.occupied) return state;
            return {
                ...state,
                occupied : true,
                person : action.payload
            };
        case LEAVE :
            return {
                ...state,
                occupied : false,
                person : null
            };
        default:
            return state;
    }
}

export default chairReducer;