## Usage

A helper function that wraps of the 'fetch-mock' library, making it easy to mock API calls from your component.

See the stories for a working examples.

```
  import mockEndpoints from "@paprika/mock-endpoints";

  const handlers = [
    {
      url: '/users',
      response: [{ id: 1, name: "nahum", ... }, { id: 2, name: "jamie"}],
    },
    {
      url: '/groups',
      response: [{ id: 1, name: "UX", members: [1,2] }, {}],
    }
  ];

  export default function UserLookupStory() {
    mockEndpoints(handlers);

    // Any API calls in this component will be intercepted and the response will come from "handlers"
    return <UserLookup />;
  }
```
