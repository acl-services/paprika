import styled from "styled-components";
import stylers from "@paprika/stylers";

export const Navigation = styled.div`
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  height: 44px;
  justify-content: flex-start;
  padding: ${stylers.spacer(1)};
  width: 100%;
`;
