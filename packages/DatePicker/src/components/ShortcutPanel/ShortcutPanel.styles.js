import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { HoveredItemStyles, SelectedItemStyles } from "../../shared.styles";

export const ActionBarStyled = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  bottom: 0;
  border-top: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  display: flex;
  height: ${stylers.spacer(5)};
  padding-left: ${tokens.spaceLg};
  position: absolute;
  width: 100%;

  > [type="button"] {
    flex-shrink: 0;

    &:last-child {
      margin-left: ${tokens.spaceSm};
    }
  }
`;

export const ColumnHeaderStyled = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  border-bottom: 1px solid ${tokens.border.color};
  display: flex;
  flex-shrink: 0;
  font-weight: bold;
  height: ${stylers.spacer(5)};
  justify-content: center;
  padding: ${tokens.space};

  ${({ isYear }) =>
    isYear &&
    css`
      border-left: 1px solid ${tokens.border.color};
      justify-content: space-between;
    `}
`;

export const ContainerStyled = styled.div`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  font-family: ${tokens.fontFamily.default};
  ${stylers.fontSize(-1)}
  height: 245px;
  overflow: hidden;
  position: relative;
  width: 257px;

  ${({ isOpen }) =>
    !isOpen &&
    `
      width: 0;
      height: 0;
  `}

  &:focus {
    outline: none;
  }

  * {
    box-sizing: border-box;
  }

  div[role="group"] {
    border: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    overflow: hidden;
    padding: 5px ${tokens.spaceLg} ${tokens.spaceSm} ${tokens.spaceLg};
  }
`;

export const LabelStyled = styled.label`
  align-items: center;
  border-radius: ${tokens.border.radius};
  cursor: pointer;
  display: flex;
  height: 22px;
  justify-content: center;
  width: 46px;

  &:hover {
    ${HoveredItemStyles}
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      ${SelectedItemStyles}
    `}
`;

export const ListStyles = css`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const MonthListStyled = styled.div`
  ${ListStyles}
`;

export const OptionWrapperStyled = styled.div`
  margin-bottom: 1px;
  margin-right: ${tokens.spaceLg};

  input[type="radio"] {
    display: block;
    height: 0;
    margin: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const PanelContentStyled = styled.div`
  display: flex;
  height: calc(100% - ${stylers.spacer(5)});
`;

export const YearListStyled = styled.div`
  ${ListStyles}

  > div[role="group"] {
    border-left: 1px solid ${tokens.border.color};
  }
`;
