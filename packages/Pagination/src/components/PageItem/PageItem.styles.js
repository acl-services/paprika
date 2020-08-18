import styled from "styled-components";
import RawButton from "@paprika/raw-button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const PageItem = styled(RawButton)`
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.textColor.link};
  height: ${stylers.spacer(3)};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};

  position: relative;
  text-align: center;
  width: ${stylers.spacer(3)};

  &:hover {
    background: ${tokens.color.blackLighten70};
  }
`;

export const Wrapper = styled.span`
  border-right: 1px solid ${tokens.border.color};
  margin: 0 ${tokens.spaceSm};
  padding-right: ${stylers.spacer(1)};
  position: relative;
`;
