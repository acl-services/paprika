import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const textStyles = styled.p`
  color: ${tokens.color.black};
  ${stylers.fontSize(-2)};
  height: ${spacer(8)};
  margin: 0px;
  overflow: hidden;
  padding: 0;
`;
