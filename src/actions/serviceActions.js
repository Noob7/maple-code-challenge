import{UPDATE_SELECTED_SERVICE} from './types';

export function updateSelectedService(service) {
    return {
      type: UPDATE_SELECTED_SERVICE,
      payload: service
    }
  }