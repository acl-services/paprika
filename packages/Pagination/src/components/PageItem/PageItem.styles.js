import styled from "styled-components";
import RawButton from "@paprika/raw-button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const PageItem = styled(RawButton)`
  align-items: center;
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.textColor.link};
  display: flex;
  height: ${stylers.spacer(3)};
  justify-content: center;
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};

  position: relative;
  text-align: center;
  width: ${stylers.spacer(3)};

  &:hover {
    background: ${tokens.color.blackLighten70};
  }
`;
