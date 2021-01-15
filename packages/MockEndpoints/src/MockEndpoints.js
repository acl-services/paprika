import fetchMock from "fetch-mock";

export default fetchMock;

function validateEndpoint(endpoint) {
  if (!("url" in endpoint)) {
    console.error('MockEndpoints.js: Each endpoint object must have a "url" key.');
  }

  if (!("response" in endpoint)) {
    console.error('MockEndpoints.js: Each endpoint object must have a "response" key.');
  }
}

export function mockEndpoints(endpoints) {
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
