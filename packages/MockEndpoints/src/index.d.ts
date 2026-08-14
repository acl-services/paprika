import type * as fetchMock from "fetch-mock";

interface MockEndpoint {
  /** Url to intercept, matched the way fetch-mock matches routes. */
  url: string;
  /** Body that fetch-mock replies with. */
  response: any;
}

/** Mocks every given endpoint and reports when they are in place. */
export declare function useMockEndpoints(endpoints: MockEndpoint[]): { endpointsAreMocked: boolean };

/** The fetch-mock instance the mocked endpoints are registered on. */
declare const mockEndpoints: fetchMock.FetchMockStatic;

export default mockEndpoints;
