import React from "react";
import styled, { css } from "styled-components";

const BlockStyled = styled.div(({ basis = "100%", textAlign = "left" }) => {
  return css`
    flex-basis: ${basis};
    text-align: ${textAlign};
    .docblock-source {
      margin: 0;
    }
    padding: 8px;
  `;
});

export const Block = ({ children }) => {
  return <BlockStyled>{children}</BlockStyled>;
};

export default function Blocks(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
}
