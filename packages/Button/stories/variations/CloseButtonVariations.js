import React from "react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import Button from "../../src/Button";

const DarkBackground = styled.span`
  background: ${tokens.color.black};
  display: inline-block;
  margin-left: ${tokens.space};
  padding: ${tokens.space};
`;

function clickHandler() {
  action("Clicked a button")();
}

export default function CloseButtonVariations() {
  return (
    <>
      <p>
        <Button.Close onClick={clickHandler} size="small" />
        <Button.Close onClick={clickHandler} />
        <Button.Close onClick={clickHandler} size="large" />
        <DarkBackground>
          <Button.Close onClick={clickHandler} isDark a11yText="dark close" />
        </DarkBackground>
      </p>
    </>
  );
}
