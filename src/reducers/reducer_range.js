import {
    RANGE_ON,
    RANGE_OFF
} from '../constants/index';


const initialState = {
    range: false
}

export default function range(state = initialState, action) {
    switch (action.type) {
        case RANGE_ON:
            return { ...state, range: true };

        case RANGE_OFF:
            return { ...state, range: false };

        default:
            return state;
    }
}
