import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const MarvelOptionWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const MarvelImage = styled.img`
  border-radius: 3px;
  height: auto;
  margin-right: ${spacer(2)};
  max-width: 50px;
  width: 100%;
`;
