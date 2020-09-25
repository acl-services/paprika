import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const alignStr = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

export const Container = styled.span(({ $align = "left", $color }) => {
  return css`
    ${$color ? `color: ${$color}` : ""};
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: ${$align in alignStr ? alignStr[$align] : "flex-start"};
    padding: ${tokens.space};
  `;
});
