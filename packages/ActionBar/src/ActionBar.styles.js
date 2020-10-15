import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";

export const ActionBar = styled.div`
  align-items: center;
  display: flex;
  font-family: inherit;
  height: 44px;
  justify-content: flex-start;
  width: 100%;
`;

const genericIsOpenStyles = css`
  background-color: ${stylers.alpha(tokens.color.black, 0.1)};
`;

export const GenericTrigger = styled(Button)(
  ({ isOpen }) => css`
    ${stylers.fontSize(-1)}
    align-items: center;
    border: 1px solid ${tokens.color.blackLighten60};
    border-radius: ${tokens.button.borderRadius};
    color: ${tokens.textColor.default};
    display: flex;
    font-weight: bold;
    justify-content: center;
    margin-right: ${tokens.space};
    padding: ${tokens.spaceSm} ${tokens.space};
    transition-duration: 0.2s;
    transition-property: "background-color";
    &:hover {
      ${genericIsOpenStyles}
    }

    ${isOpen ? genericIsOpenStyles : ""}
  `
);

export const getGenericTriggerIcon = Icon => {
  return styled(Icon)`
    font-size: 1.25em;
    padding-right: ${tokens.space};
  `;
};

export const GenericNoAppliedPlaceholder = styled.div`
  color: ${tokens.placeholder.color};
  padding: ${tokens.spaceSm} ${tokens.spaceLg};
`;
