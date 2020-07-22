import styled from "styled-components";
import tokens from "@paprika/tokens";

export const CSSHolder = styled.div`
  .timeinput {
    position: relative;

    .timeinput-picker {
      position: absolute;
    }

    input[type="text"][disabled] {
      background: ${tokens.color.blackLighten70};
      cursor: not-allowed;
    }
  }
`;
