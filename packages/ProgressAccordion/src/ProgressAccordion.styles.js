import styled from "styled-components";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Accordion = styled.div`
  &,
  * {
    box-sizing: border-box;
  }
`;

export const Item = styled.div`
  color: ${tokens.textColor.subtle};
  display: flex;

  [data-pka-anchor="indicator"] {
    margin: ${tokens.space} ${tokens.spaceLg} 0 0;
  }
`;

export const ActiveItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActiveLabel = styled.div`
  ${stylers.truncateText}
  
  color: ${tokens.color.blue};
`;

export const ActiveStatus = styled.div`
  ${stylers.fontSize(-1)}

  font-style: italic;
  font-weight: normal;
`;

export const ActiveLabelText = styled.span`
  ${visuallyHidden}
`;
