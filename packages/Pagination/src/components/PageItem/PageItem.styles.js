import styled from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const PageItem = styled(RawButton)`
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.textColor.link};
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  padding-left: ${tokens.space};
  padding-right: ${tokens.space};
  position: relative;

  &:hover {
    background: ${tokens.color.blackLighten70};
  }
`;
