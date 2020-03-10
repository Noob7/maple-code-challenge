import { makeRequest } from './api';

export const fetchServices = () => {
  const request = {
    method: 'GET',
    path: 'services',
  };

  return makeRequest(request);
};

export const fetchProviders = () => {
  const request = {
    method: 'GET',
    path: 'providers?include=locations%2Cschedules.location&amp;page%5Bnumber%5D=1&amp;page%5Bsize%5D=10',
  };

  return makeRequest(request);
};