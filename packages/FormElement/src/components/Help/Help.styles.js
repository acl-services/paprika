import styled, { css } from "styled-components";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";

export const StyledTrigger = styled(Popover.Trigger)`
  height: 1em;
  width: 1em;
`;

export const iconStyles = css`
  color: ${tokens.textColor.icon};
`;

const helpStyles = css`
  display: inline-block;
  height: 1em;
  vertical-align: middle;
`;

export default helpStyles;
