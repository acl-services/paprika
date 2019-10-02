import { css } from "styled-components";

import tokens from "@paprika/tokens";

const opacityNoneStyles = css`
  opacity: 0;
`;

export const calendarPopoverStyles = css`
  margin-left: -${tokens.space};

  ${({ shouldShowCalendar }) => !shouldShowCalendar && opacityNoneStyles};
`;
