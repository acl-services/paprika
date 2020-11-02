import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, lineHeight, spacer } from "@paprika/stylers/lib/helpers";
import Collapsible from "@paprika/collapsible";

export const CollapsibleCard = styled(Collapsible)`
  background-color: ${tokens.color.white};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.card.shadow};
  min-height: ${({ hasAvatar }) => (hasAvatar ? spacer(9) : spacer(7))};

  > [data-pka-anchor="raw-button"] {
    margin: 0;
    padding: ${spacer(2)};
    width: 100%;

    > [data-pka-anchor="collapsible.icon"] {
      margin-right: ${spacer(2)};
      ${({ hasLabelOnly }) =>
        hasLabelOnly
          ? ""
          : css`
              margin-top: ${spacer(1)};
            `}
    }
  }
`;

export const Label = styled.div`
  display: flex;
`;

export const LabelText = styled.div`
  ${fontSize(1)}
  ${lineHeight(-1)}
  color: ${tokens.color.black};
  font-weight: bold;
`;
