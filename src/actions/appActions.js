import { fetchServices, fetchProviders } from '../services/appService';
import { FETCH_SERVICES_REQUEST, 
         FETCH_SERVICES_SUCCESS, 
         FETCH_SERVICES_ERROR, 
         FETCH_PROVIDERS_ERROR, 
         FETCH_PROVIDERS_REQUEST, 
         FETCH_PROVIDERS_SUCCESS,
        } from './types';

function fetchServicesRequest() {
  return {
    type: FETCH_SERVICES_REQUEST
  }
}

function fetchServiceSuccess(services) {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: services
  }
}

function fetchServicesError(error) {
  return {
    type: FETCH_SERVICES_ERROR,
    payload: error
  }
}

function fetchProvidersRequest() {
  return {
    type: FETCH_PROVIDERS_REQUEST,
  }
}

function fetchProvidersuccess(Providers) {
  return {
    type: FETCH_PROVIDERS_SUCCESS,
    payload: Providers
  }
}

function fetchProvidersError(error) {
  return {
    type: FETCH_PROVIDERS_ERROR,
    payload: error
  }
}

export function fetchAllServices() {
  return function (dispatch) {
    dispatch(fetchServicesRequest());

    return fetchServices()
      .then(
        response => dispatch(fetchServiceSuccess(response.data.data)),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => dispatch(fetchServicesError(error))
      )
  }
}

export function fetchAllProviders() {
  return function (dispatch) {
    dispatch(fetchProvidersRequest());

    return fetchProviders()
      .then(
        response => dispatch(fetchProvidersuccess(response.data.included)),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => dispatch(fetchProvidersError(error))
      )
  }
}
