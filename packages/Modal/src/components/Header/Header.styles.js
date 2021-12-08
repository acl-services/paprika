import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: ${spacer(7)};
  padding: 0 ${spacer(2)};
`;

export const HeaderHeading = styled(Heading)(
  ({ isSingleLine, hasCloseButton }) => css`
    margin-right: ${spacer(2)};

    ${isSingleLine &&
      `
      ${stylers.truncateText};
      padding: ${spacer(2)} 0;
      ${hasCloseButton ? `margin: 0 ${spacer(2)} 0 0; width: 95%;` : `margin: 0;`}
    `}
  `
);
