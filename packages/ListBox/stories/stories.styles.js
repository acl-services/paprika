import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Frame = styled.div`
  padding: 32px;
`;

export const ImageOption = styled.div`
  height: ${spacer(6)};
  line-height: ${spacer(6)};
  text-align: center;
  width: ${spacer(6)};

  img {
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;
