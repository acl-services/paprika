import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import Popover from "@paprika/popover";

const readOnlyStyles = css`
  cursor: default;
`;

const disabledStyles = css`
  cursor: not-allowed;
`;

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

export const PopoverTrigger = styled(Popover.Trigger)(
  ({ isReadOnly, isDisabled }) => css`
    width: 100%;
    ${isReadOnly ? readOnlyStyles : null}
    ${isDisabled ? disabledStyles : null}
  `
);
