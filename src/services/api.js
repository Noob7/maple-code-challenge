import axios from 'axios';

export const requestMethodsEnum = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function sanitizeEndpoint(endpoint) {
  const api ='https://api.inquickerstaging.com/v3/winter.inquickerstaging.com';
  if (endpoint.charAt(0) !== '/') {
    return `${api}/${endpoint}`;
  }
  return `${api}${endpoint}`;
}


/**
 * @param {'POST' | 'PUT' | 'GET' | 'DELETE'} method
 * @param {string} path
 * @param {string} token
 * @param {Config} opts
 * @return {Config}
 */


export function makeRequest({ body = null, headers = {}, method, path }) {

  const request = {
    data: body,
    service: 'execute-api',
    headers: {
      'Content-Type': 'application/json',
      // Fix IE unwanted caching
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
      ...headers,
    },
    method,
    region: 'eu-west-1',
    url: sanitizeEndpoint(path),
  };

  return axios(request);
}






