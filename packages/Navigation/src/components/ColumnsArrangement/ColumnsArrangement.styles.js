import styled, { css } from "styled-components";
import PaprikaSortable from "@paprika/sortable";
import PaprikaSwitch from "@paprika/switch";
import PlaceholderIcon from "@paprika/icon/lib/Search";
import RawButton from "@paprika/raw-button";
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
  padding-top: ${tokens.spaceSm};
`;

export const ColumnLabel = styled.span`
  ${stylers.truncateText}
`;

export const Switch = styled(PaprikaSwitch)`
  flex-shrink: 0;
`;

const hasColumnsHiddenStyles = css`
  background-color: ${stylers.alpha(tokens.color.chartColor10, 0.3)};
`;

const isOpenStyles = css`
  background-color: ${stylers.alpha(tokens.color.black, 0.1)};
`;

export const Trigger = styled(RawButton)`
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
    ${isOpenStyles}
  }

  ${({ hasColumnsHidden, isOpen }) => {
    if (hasColumnsHidden) return hasColumnsHiddenStyles;
    if (isOpen) return isOpenStyles;
  }}
`;

export const Icon = styled(PlaceholderIcon)`
  margin-right: ${tokens.spaceSm};
`;
