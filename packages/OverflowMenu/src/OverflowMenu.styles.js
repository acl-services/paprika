import styled, { css } from "styled-components";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Content = styled.div`
  margin-inline-start: -${tokens.spaceLg};
  margin-inline-end: -${tokens.spaceLg};

  [role="menuitem"] {
    ${stylers.lineHeight(-1)}
  }
`;

export const PopoverCard = styled(Popover.Card)(
  ({ maxHeight }) => css`
    max-height: ${Number.isNaN(Number(maxHeight)) ? maxHeight : `${maxHeight}px`};
    overflow: auto;
  `
);
