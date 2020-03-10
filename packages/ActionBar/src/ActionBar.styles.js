import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const ActionBar = styled.div`
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  font-family: inherit;
  height: 44px;
  justify-content: flex-start;
  padding: ${stylers.spacer(1)};
  width: 100%;
`;

const genericIsOpenStyles = css`
  background-color: ${stylers.alpha(tokens.color.black, 0.1)};
`;

export const GenericTrigger = styled(RawButton)`
  ${stylers.fontSize()}
  align-items: center;
  border-radius: ${tokens.button.borderRadius};
  color: ${tokens.textColor.default};
  display: flex;
  font-weight: bold;
  margin-right: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};
  transition-duration: 0.2s;
  transition-property: "background-color";

  &:hover {
    ${genericIsOpenStyles}
  }

  ${({ isOpen }) => (isOpen ? genericIsOpenStyles : "")}
`;

export const getGenericTriggerIcon = Icon => {
  return styled(Icon)`
    margin-right: ${tokens.spaceSm};
  `;
};

export const GenericPopoverPlaceholder = styled.div`
  color: ${tokens.placeholder.color};
  padding: ${tokens.spaceSm} ${tokens.spaceLg};
`;
