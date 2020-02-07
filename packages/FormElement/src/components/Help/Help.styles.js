import styled, { css } from "styled-components";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { toInt } from "@paprika/stylers/lib/helpers";

export const StyledTrigger = styled(Popover.Trigger)`
  height: 1em;
  width: 1em;
`;

export const iconStyles = css`
  color: ${tokens.textColor.icon};
`;

const helpStyles = css`
  height: 1em;
  position: absolute;
  right: -${toInt(tokens.spaceSm) * 5}px;
  top: 1px;
`;

export default helpStyles;
