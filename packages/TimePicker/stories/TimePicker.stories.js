import React from "react";
import { storiesOf } from "@storybook/react";
import TimePicker from "../src";
import Picker from "../src/components/Picker/Picker";

function Container({ children }) {
  return <div style={{ padding: "32px", maxWidth: "366px" }}>{children}</div>;
}

function ScreenerContainer({ children }) {
  return <div style={{ height: "256px", width: "366px", float: "left" }}>{children}</div>;
}

storiesOf("TimePicker", module)
  .add("pick", () => (
    <Container>
      <Picker />
    </Container>
  ))
  .add("Basic", () => (
    <Container>
      <TimePicker isVisible />
    </Container>
  ))
  .add("Format 0000", () => (
    <Container>
      <TimePicker defaultValue="0000" isVisible />
    </Container>
  ))
  .add("Format 03:33am", () => (
    <Container>
      <TimePicker defaultValue="03:33am" isVisible />
    </Container>
  ))
  .add("Format 10....22pm2", () => (
    <Container>
      <TimePicker defaultValue="10....22pm2" isVisible />
    </Container>
  ))
  .add("Format 1344", () => (
    <Container>
      <TimePicker defaultValue="1344" isVisible />
    </Container>
  ))
  .add("Format 1pm", () => (
    <Container>
      <TimePicker defaultValue="1pm" isVisible />
    </Container>
  ))
  .add("Format 3333", () => (
    <Container>
      <TimePicker defaultValue="3333" />
    </Container>
  ))
  .add("Format 959", () => (
    <Container>
      <TimePicker defaultValue="959" isVisible />
    </Container>
  ))
  .add("Format 6am", () => (
    <Container>
      <TimePicker defaultValue="6am" isVisible />
    </Container>
  ))
  .add("Format 730am  isVisible=false", () => (
    <Container>
      <TimePicker defaultValue="730am" />
    </Container>
  ))
  .add("Screener", () => (
    <>
      <ScreenerContainer>
        <TimePicker defaultValue="730am" />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="6am" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="959" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="3333" />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="1pm" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="1344" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="10....22pm2" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="03:33am" isVisible />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="0000" isVisible />
      </ScreenerContainer>
    </>
  ));
