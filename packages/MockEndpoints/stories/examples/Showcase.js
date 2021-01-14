import React from "react";
import mockEndpoints from "../../src";

const endPoints = [
  {
    url: "/players",
    responseData: [
      { id: 1, name: "Wayne Gretzky", number: 99 },
      { id: 2, name: "Gordie Howe", number: 4 },
      { id: 3, name: "Sydney Crosby", number: 87 },
      { id: 4, name: "Mario Lemiux", number: 66 },
    ],
  },
  {
    url: "/teams",
    responseData: [
      { id: 1, name: "LA Kings", founded: 1967 },
      { id: 2, name: "Pittsburgh Penguins", founded: 1967 },
      { id: 2, name: "Detroit Red Wings", enteredLeague: 1926 },
    ],
  },
];

mockEndpoints(endPoints);

export default function ShowcaseStory() {
  const [response, setResponse] = React.useState("");

  function fetchPlayers() {
    fetch("/players")
      .then(resp => resp.json())
      .then(data => setResponse(data));
  }

  async function fetchTeams() {
    fetch("/teams")
      .then(resp => resp.json())
      .then(data => setResponse(data));
  }

  async function fetchUnknown() {
    fetch("/doesnt-exist")
      .then(resp => resp.json())
      .then(data => setResponse(data));
  }

  return (
    <>
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
      Response:<xmp>{JSON.stringify(response)}</xmp>
    </>
  );
}
