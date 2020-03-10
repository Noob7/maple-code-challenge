import {
    UPDATE_SELECTED_SERVICE
} from '../actions/types';


const initialState = {
    selectedService: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECTED_SERVICE: {
            const selectedService = action.payload;
            return {
                ...state,
                selectedService,
            }
        }
    default:
    return state;
}
}
