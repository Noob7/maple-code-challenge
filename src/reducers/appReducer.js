import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_ERROR,
    FETCH_PROVIDERS_ERROR,
    FETCH_PROVIDERS_REQUEST,
    FETCH_PROVIDERS_SUCCESS,
} from '../actions/types';


const initialState = {
    fetchingServices: false,
    fetchingProviders: false,
    services: [],
    providers: [],
    servicesError: '',
    providersError: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICES_REQUEST: {
            return {
                ...state,
                fetchingServices: true,
            }
        }
        case FETCH_SERVICES_ERROR: {
            const err = action.payload;
            return {
                ...state,
                servicesError: err
            }
        }
        case FETCH_SERVICES_SUCCESS: {
            const services = action.payload;
            return {
                ...state,
                services,
            }
        }
        case FETCH_PROVIDERS_REQUEST: {
            return {
                ...state,
                fetchingProviders: true
            }
        }
        case FETCH_PROVIDERS_ERROR: {
            const err = action.payload;
            return {
                ...state,
                providersError: err
            }
        }
        case FETCH_PROVIDERS_SUCCESS: {
            const providers = action.payload;
            return {
                ...state,
                providers,
            }
        }
    
    default:
    return state;
}
}
