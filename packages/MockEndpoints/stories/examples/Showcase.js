import React from "react";
import { useMockEndpoints } from "../../src";
import endpoints from "./mock-endpoints.json";

export default function ShowcaseStory() {
  const [response, setResponse] = React.useState("");

  const { endpointsAreMocked } = useMockEndpoints(endpoints);
  if (!endpointsAreMocked) return null;

  function fetchPlayers() {
    fetch("/players")
      .then(res => res.json())
      .then(data => setResponse(data));
  }

  async function fetchTeams() {
    fetch("/teams")
      .then(res => res.json())
      .then(data => setResponse(data));
  }

  async function fetchUnknown() {
    fetch("/non-existent-endpoint")
      .then(res => res.json())
      .then(data => setResponse(data));
  }

  return (
    <>
      <p>Click on one of the buttons below to hit the mock API endpoint:</p>
      <button type="button" onClick={fetchPlayers}>
        Fetch Players
      </button>
      <button type="button" onClick={fetchTeams}>
        Fetch Teams
      </button>
      <button type="button" onClick={fetchUnknown}>
        Fetch Unknown
      </button>
      <br />
      <br />
      <xmp>{JSON.stringify(response)}</xmp>
    </>
  );
}
