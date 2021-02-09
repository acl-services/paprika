import React from "react";
import styled, { css } from "styled-components";

const BlockStyled = styled.div(({ basis = "100%", textAlign = "left" }) => {
  return css`
    flex-basis: ${basis};
    margin: 2px;
    text-align: ${textAlign};
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
        padding: "4px",
      }}
    >
      {props.children}
    </div>
  );
}
