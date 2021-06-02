import styled, { css } from "styled-components";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Content = styled.div`
  margin-left: -${tokens.spaceLg};
  margin-right: -${tokens.spaceLg};

  [role="menuitem"] {
    ${stylers.lineHeight(-1)}
  }
`;

export const PopoverCard = styled(Popover.Card)(
  ({ maxHeight }) => css`
    max-height: ${maxHeight}px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0;
    }
  `
);
