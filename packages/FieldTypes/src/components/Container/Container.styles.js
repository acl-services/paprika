import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const alignStr = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

export const Container = styled.div(({ $align = "left" }) => {
  return css`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-family: "IBM Plex Mono", monospace;
    height: 100%;
    justify-content: ${$align in alignStr ? alignStr[$align] : "flex-start"};
    padding: ${tokens.space};
  `;
});
