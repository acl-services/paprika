import styled from "styled-components";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";

export const consts = {
  transition: "150ms",
};

export const Popover = styled.div`
  display: inline-block; /* required for proper positioning */
`;

export const Trigger = styled(RawButton)`
  &:focus {
    box-shadow: none;
    ${stylers.focusRing.subtle()};
  }
`;
