import styled from "styled-components";
import Collapsible from "@paprika/collapsible";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
// import Item from "../Item";

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
`;

// works
// export const NavItem = styled(Item)`
//   border-bottom: none;
//   color: ${({ isComplete }) => (isComplete ? tokens.color.black : tokens.textColor.subtle)};

//   p {
//     margin-top: 0;
//   }
// `;

export const ItemLabel = styled.div`
  ${stylers.truncateText}
  cursor: ${({ isClickable }) => (isClickable ? "default" : "pointer")};
`;
