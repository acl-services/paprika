import { css } from "styled-components";

const activeStyles = css`
  background-color: #e6e6e6;
  border-color: #2f3b4d;
  color: #1e1e1e;
`;

export const atlasTabs = {
  Tabs: ({ value }) => css`
    [data-pka-anchor="tab"]:nth-of-type(${value.activeIndex + 1}) {
      ${activeStyles};
    }
    [data-pka-anchor="tab"] {
      &:hover {
        background-color: #e6e6e6;
      }
    }
    [data-pka-anchor="icon"] {
      color: #1e1e1e;
      opacity: 1;
    }
  `,
};
