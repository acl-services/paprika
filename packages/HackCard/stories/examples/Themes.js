import React from "react";
import { ThemeProvider } from "styled-components";
import Button, { atlasButton } from "@paprika/hf-button";
import Card, { atlasCard } from "../../src";

const atlasTheme = {
  ...atlasButton,
  ...atlasCard,
};

export default () => (
  <>
    <ThemeProvider theme={atlasTheme}>
      <Card size="small">
        Board Meeting
        <p>October 6, 2021</p>
        <Button>Agenda</Button>
      </Card>
      <br />
      <Card>
        Board Meeting
        <p>October 6, 2021</p>
        <Button kind="secondary">Agenda</Button>
      </Card>
      <br />
      <Card size="large">
        Board Meeting
        <p>October 6, 2021</p>
        <Button kind="primary">Agenda</Button>
      </Card>
    </ThemeProvider>
  </>
);
