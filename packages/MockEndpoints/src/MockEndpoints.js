import fetchMock from "fetch-mock";

export default handlers => {
  // validate that the handlers have a certain shape (url, responseData)
  handlers.forEach(handler => {
    fetchMock.get(handler.url, handler.responseData);
  });

  fetchMock.catch(url => {
    const error = `MockEndpoints.js: You did not mock the endpoint "${url}", but did request it.`;
    console.error(error);
    return { error };
  });
};
