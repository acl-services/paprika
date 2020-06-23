import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { ButtonIcon } from "./Button";

export const LinkButtonIcon = styled(ButtonIcon)`
  ${stylers.fontSize(-3)}
  color: ${tokens.textColor.icon};
  margin-top: -${tokens.spaceSm};
`;
