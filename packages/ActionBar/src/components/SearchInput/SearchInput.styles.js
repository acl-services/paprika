import styled from "styled-components";
import PaprikaInput from "@paprika/input";
import tokens from "@paprika/tokens";

export const Input = styled(PaprikaInput)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  margin-right: ${tokens.space};
`;
