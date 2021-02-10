import React from "react";
import styled from "styled-components";
import Button from "@paprika/button";
import Card from "@paprika/card";
import { Story } from "storybook/assets/styles/common.styles";
import Toast from "@paprika/toast";

import { useSeducer } from "../../src";

export default function App() {
  function up(state) {
    return state + 1;
  }

  function down(state) {
    return state - 1;
  }

  const [state, dispatch, action] = useSeducer({ up, down }, 0, null, true);

  return (
    <Story>
      <Card style={{ padding: "16px" }}>
        <Toast hasCloseButton={false}>Push some buttons</Toast>
        <ButtonGroup>
          <Button onClick={() => dispatch(action.up)}>+</Button>
          <Button onClick={() => dispatch(action.down)}>-</Button>
        </ButtonGroup>
        <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{state}</div>
      </Card>
    </Story>
  );
}

const ButtonGroup = styled.div`
  & button {
    margin: 4px;
  }
`;
