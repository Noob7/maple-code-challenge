import { combineReducers } from 'redux';
import appReducer from './appReducer';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({ app:appReducer, control:servicesReducer });

export default rootReducer;