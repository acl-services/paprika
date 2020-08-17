import styled from "styled-components";
import RawButton from "@paprika/raw-button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const PageItem = styled(RawButton)`
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.textColor.link};
  display: inline-block;
  height: ${stylers.spacer(3)};
  margin: 0 ${stylers.spacer(1)} 0 ${stylers.spacer(1)};
  padding: 0 ${stylers.spacer};
  position: relative;

  &:hover {
    background: ${tokens.color.blackLighten70};
  }
`;
