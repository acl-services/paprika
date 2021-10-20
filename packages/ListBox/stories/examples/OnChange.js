import React from "react";
import RJT from "react-json-tree";
import StoryHeading from "storybook/components/StoryHeading";
import { Rule } from "storybook/assets/styles/common.styles";
import ListBox from "../../src";

const propTypes = {};
const defaultProps = {};

const ParametersExample = ({ state, signature, isSingle = false }) => (
  <div style={{ padding: "8px", border: "1px solid #CCC", "margin-bottom": "8px", "border-radius": "3px" }}>
    <span style={{ "font-size": "14px", color: " #333" }}>
      {isSingle ? "Single select" : "Multi select"} onChange signature:
    </span>
    <hr />
    <code
      style={{
        display: "block",
        "font-size": "13px",
        color: "#785CBA",
        padding: "8px",
        "margin-bottom": "8px",
        "font-weight": "600",
        "border-radius": "3px",
        background: "#EEE",
        border: "1px solid #CCC",
      }}
    >
      {signature}
    </code>
    {state ? <RJT hideRoot data={state} /> : null}
  </div>
);

const signatureSingleStr = `onChange(index, [options], { dispatch, actionTypes, eventType })`;
const signatureMultipleStr = `onChange([indexes], [options], indexSelected, { dispatch, actionTypes, eventType })`;

export default function OnChange() {
  const [singleState, setSingleState] = React.useState(null);
  const [multipleState, setMultipleState] = React.useState(null);
  const [singleStateWithFooter, setSingleStateWithFooter] = React.useState(null);
  const [multiStateWithFooter, setMultiStateWithFooter] = React.useState(null);

  const handleSingleChange = (...args) => {
    setSingleState(args);
  };

  const handleSingleStateWithFooter = (...args) => {
    setSingleStateWithFooter(args);
  };

  const handleMultipleChange = (...args) => {
    setMultipleState(args);
  };

  const handleMultiStateWithFooter = (...args) => {
    setMultiStateWithFooter(args);
  };

  return (
    <>
      <div>
        <StoryHeading level={2}>Single selection</StoryHeading>
        <ParametersExample state={singleState} signature={signatureSingleStr} isSingle />
        <ListBox onChange={handleSingleChange}>
          <ListBox.Option>One</ListBox.Option>
          <ListBox.Option>Two</ListBox.Option>
          <ListBox.Option>Three</ListBox.Option>
        </ListBox>
        <br />
        <StoryHeading level={2}>Single selection with footer</StoryHeading>
        <ParametersExample state={singleStateWithFooter} signature={signatureSingleStr} isSingle />
        <ListBox>
          <ListBox.Option>One</ListBox.Option>
          <ListBox.Option>Two</ListBox.Option>
          <ListBox.Option>Three</ListBox.Option>
          <ListBox.Footer onClickAccept={handleSingleStateWithFooter} />
        </ListBox>
      </div>
      <Rule />
      <div>
        <StoryHeading level={2}>Multiple selection with footer</StoryHeading>
        <ParametersExample state={multipleState} signature={signatureMultipleStr} />
        <ListBox isMulti onChange={handleMultipleChange}>
          <ListBox.Option>One</ListBox.Option>
          <ListBox.Option>Two</ListBox.Option>
          <ListBox.Option>Three</ListBox.Option>
          <ListBox.Option>Four</ListBox.Option>
          <ListBox.Option>Five</ListBox.Option>
          <ListBox.Option>Six</ListBox.Option>
        </ListBox>
        <br />
        <StoryHeading level={2}>Multiple selection with footer</StoryHeading>
        <ParametersExample state={multiStateWithFooter} signature={signatureMultipleStr} />
        <ListBox isMulti>
          <ListBox.Option>One</ListBox.Option>
          <ListBox.Option>Two</ListBox.Option>
          <ListBox.Option>Three</ListBox.Option>
          <ListBox.Option>Four</ListBox.Option>
          <ListBox.Option>Five</ListBox.Option>
          <ListBox.Option>Six</ListBox.Option>
          <ListBox.Footer onClickAccept={handleMultiStateWithFooter} />
        </ListBox>
      </div>
    </>
  );
}

OnChange.propTypes = propTypes;
OnChange.defaultProps = defaultProps;
