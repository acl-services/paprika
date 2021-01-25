import React from "react";
import fetchMock from "fetch-mock";

export default fetchMock;

fetchMock.config.overwriteRoutes = true;

function validateEndpoint(endpoint) {
  if (!("url" in endpoint)) {
    console.error('MockEndpoints.js: Each endpoint object must have a "url" key.');
  }

  if (!("response" in endpoint)) {
    console.error('MockEndpoints.js: Each endpoint object must have a "response" key.');
  }
}

function mockEndpoints(endpoints) {
  endpoints.forEach(endpoint => {
    validateEndpoint(endpoint);
    fetchMock.get(endpoint.url, endpoint.response);
  });

  fetchMock.catch(url => {
    const error = `MockEndpoints.js: You did not mock the endpoint "${url}", but did request it.`;
    console.error(error);
    return { error };
  });
}

export function useMockEndpoints(endpoints) {
  const [endpointsAreMocked, setEndpointsAreMocked] = React.useState(false);

  React.useEffect(() => {
    mockEndpoints(endpoints);
    setEndpointsAreMocked(true);
  }, [endpoints]);

  mockEndpoints(endpoints);

  return { endpointsAreMocked };
}
