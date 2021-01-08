import styled from "styled-components";
import Radio from "@paprika/radio";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const RadioGroup = styled(Radio.Group)`
  display: flex;
  margin-bottom: ${tokens.spaceLg};

  > [data-pka-anchor="radio"] {
    margin-top: 0;

    &:first-child {
      margin-right: ${spacer(4)};
    }
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: ${tokens.spaceLg};
`;
