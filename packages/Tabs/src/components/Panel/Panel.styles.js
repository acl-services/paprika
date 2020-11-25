import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

export const Panel = styled.div`
  margin-top: ${stylers.spacer(2)};

  ${({ isSelected, shouldUnmount }) =>
    !isSelected && !shouldUnmount
      ? css`
          display: none;
        `
      : ""}
`;
