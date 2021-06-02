import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import Popover from "@paprika/popover";

export const Content = styled.div`
  &:focus {
    ${stylers.focusRing.subtle(true)}
  }
`;

export const PopoverContent = styled(Popover.Content)(
  ({ contentOffsetX, contentOffsetY }) => css`
    margin: ${contentOffsetY}px ${contentOffsetX}px;
  `
);
