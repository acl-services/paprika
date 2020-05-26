import styled from "styled-components";
import stylers from "@paprika/stylers";

export const contentStyles = styled.div`
  margin-left: ${stylers.spacer(-3)};
  margin-top: ${stylers.spacer(-3)};
  width: calc(100% + ${stylers.spacer(6)});
`;
