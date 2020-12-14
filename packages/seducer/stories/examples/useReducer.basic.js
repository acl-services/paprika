import React from "react";
import styled from "styled-components";
import Button from "@paprika/button";

import { useSeducer } from "../../src";

export default function App() {
  function up(state) {
    return state + 1;
  }

  function down(state) {
    return state - 1;
  }

  const [state, dispatch] = useSeducer({ up, down }, 0, null, true);

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => dispatch("up")}>+</Button>
        <Button onClick={() => dispatch("down")}>-</Button>
      </ButtonGroup>
      <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{state}</div>
    </>
  );
}

const ButtonGroup = styled.div`
  & button {
    margin: 4px;
  }
`;
