import styled from "styled-components";
import Collapsible from "@paprika/collapsible";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const NavItem = styled(Collapsible)`
  color: ${({ isComplete }) => (isComplete ? tokens.color.black : tokens.textColor.subtle)};
  max-width: calc(100% - 36px); /* 36px = indicatorSize + margin-right */

  [role="button"] {
    font-weight: bold;
    margin-left: -${tokens.spaceSm};
    padding: ${tokens.space} ${tokens.spaceSm};
    width: calc(100% + ${tokens.spaceSm});
  }

  p {
    margin-top: 0;
  }

  [data-pka-anchor="collapsible.trigger"] {
    cursor: ${({ isClickable }) => (isClickable ? "default" : "pointer")};

    :hover {
      text-decoration: ${({ isClickable }) => (isClickable ? "none" : "underline")};
    }
  }
`;

export const ItemLabel = styled.div`
  ${stylers.truncateText}
  cursor: ${({ isClickable }) => (isClickable ? "default" : "pointer")};
`;
