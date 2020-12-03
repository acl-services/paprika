import styled from "styled-components";
import Popover from "@paprika/popover";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";

export const Help = styled(Popover)`
  margin-left: ${tokens.spaceSm};
  position: relative;
  top: 2px;
`;

export const HelpIcon = styled(InfoCircleIcon)`
  color: ${tokens.textColor.icon};
`;
