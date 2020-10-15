import styled, { css } from "styled-components";
import PaprikaSortable from "@paprika/sortable";
import PaprikaSwitch from "@paprika/switch";
import HideIcon from "@paprika/icon/lib/Hide";
import Button from "@paprika/button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${tokens.space};
`;

export const Sortable = styled(PaprikaSortable)`
  max-height: 400px;
  overflow-y: auto;
  padding-top: ${tokens.spaceSm};
`;

export const ColumnLabel = styled.span`
  ${stylers.truncateText}
`;

export const Switch = styled(PaprikaSwitch)`
  flex-shrink: 0;
  margin-left: ${tokens.spaceSm};
`;

const hasColumnsHiddenStyles = css`
  background-color: ${stylers.alpha(tokens.color.chartColor10, 0.3)};
`;

const isOpenStyles = css`
  background-color: ${stylers.alpha(tokens.color.black, 0.1)};
`;

export const Trigger = styled(Button)(
  ({ hasColumnsHidden, isOpen }) => css`
    ${stylers.fontSize(-1)}
    align-items: center;
    border: 1px solid ${tokens.color.blackLighten60};
    border-radius: ${tokens.button.borderRadius};
    color: ${tokens.textColor.default};
    display: flex;
    font-weight: bold;
    margin-right: ${tokens.space};
    padding: ${tokens.spaceSm} ${tokens.space};
    transition-duration: 0.2s;
    transition-property: "background-color";

    &:hover {
      ${isOpenStyles}
    }

    ${hasColumnsHidden && hasColumnsHiddenStyles}
    ${isOpen && isOpenStyles}
  `
);

export const Icon = styled(HideIcon)`
  margin-right: ${tokens.spaceSm};
`;
