import styled from "styled-components";
import tokens from "@paprika/tokens";

export const TimePicker = styled.div`
  position: relative;

  .timeinput-picker {
    position: absolute;
  }

  input[type="text"][disabled] {
    background: ${tokens.color.blackLighten70};
    cursor: not-allowed;
  }
`;
