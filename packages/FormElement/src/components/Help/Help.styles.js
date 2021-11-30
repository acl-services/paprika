import styled from "styled-components";
import Popover from "@paprika/popover";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";

export const Help = styled(Popover)`
  position: relative;
  top: 0px;
`;

export const HelpIcon = styled(InfoCircleIcon)`
  color: ${tokens.textColor.icon};
  font-size: ${tokens.icon.sizeSm};
`;
