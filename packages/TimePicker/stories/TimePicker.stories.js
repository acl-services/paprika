import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import FormElement from "@paprika/form-element";
import TimePicker from "../src";

const storyName = getStoryName("TimePicker");

function Container({ children }) {
  return <div style={{ padding: "32px", maxWidth: "366px" }}>{children}</div>;
}

function ScreenerContainer({ children }) {
  return <div style={{ height: "256px", width: "366px", float: "left" }}>{children}</div>;
}

storiesOf(storyName, module)
  .add("Basic", () => (
    <Container>
      <TimePicker defaultIsOpen />
    </Container>
  ))
  .add("Format 0000", () => (
    <Container>
      <TimePicker defaultValue="0000" defaultIsOpen />
    </Container>
  ))
  .add("Format 03:33am", () => (
    <Container>
      <TimePicker defaultValue="03:33am" defaultIsOpen />
    </Container>
  ))
  .add("Format 10....22pm2", () => (
    <Container>
      <TimePicker defaultValue="10....22pm2" defaultIsOpen />
    </Container>
  ))
  .add("Format 1344", () => (
    <Container>
      <TimePicker defaultValue="1344" defaultIsOpen />
    </Container>
  ))
  .add("Format 1pm", () => (
    <Container>
      <TimePicker defaultValue="1pm" defaultIsOpen />
    </Container>
  ))
  .add("Format 3333", () => (
    <Container>
      <TimePicker defaultValue="3333" defaultIsOpen />
    </Container>
  ))
  .add("Format 959", () => (
    <Container>
      <TimePicker defaultValue="959" defaultIsOpen />
    </Container>
  ))
  .add("Format 6am", () => (
    <Container>
      <TimePicker defaultValue="6am" defaultIsOpen />
    </Container>
  ))
  .add("Format 730am  defaultIsOpen=false", () => (
    <Container>
      <TimePicker defaultValue="730am" />
    </Container>
  ))
  .add("Read-only", () => (
    <Container>
      <TimePicker defaultValue="10:15am" isReadOnly />
    </Container>
  ))
  .add("With form-element", () => {
    const [hasError, setHasError] = React.useState(false);

    function handleError(error) {
      if (error) {
        setHasError(true);
      }
    }

    function handleChange() {
      setHasError(false);
    }

    return (
      <Container>
        <FormElement label="Time picker:">
          <FormElement.Content>
            <TimePicker onChange={handleChange} onError={handleError} />
          </FormElement.Content>

          <FormElement.Error>{hasError ? "Invalid time" : null}</FormElement.Error>
        </FormElement>
      </Container>
    );
  })
  .add("Screener", () => (
    <>
      <ScreenerContainer>
        <TimePicker defaultValue="730am" />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="6am" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="959" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="3333" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="1pm" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="1344" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="10....22pm2" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="03:33am" defaultIsOpen />
      </ScreenerContainer>
      <ScreenerContainer>
        <TimePicker defaultValue="0000" defaultIsOpen />
      </ScreenerContainer>
    </>
  ));
