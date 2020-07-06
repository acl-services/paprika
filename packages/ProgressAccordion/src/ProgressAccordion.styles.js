import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const AccordionWrapper = styled.div`
  &,
  * {
    box-sizing: border-box;
  }
`;

export const ItemWrapper = styled.div`
  color: ${tokens.textColor.subtle};
  display: flex;

  [data-pka-anchor="indicator"] {
    margin: ${tokens.space} ${tokens.spaceLg} 0 0;
  }
`;

export const ActiveItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActiveLabelWrapper = styled.div`
  ${stylers.truncateText}
  
  color: ${tokens.color.blue};
`;

export const ActiveStatusWrapper = styled.div`
  ${stylers.fontSize(-1)}

  font-style: italic;
  font-weight: normal;
`;
