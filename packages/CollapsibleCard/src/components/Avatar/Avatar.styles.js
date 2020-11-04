import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import Avatar from "@paprika/avatar";

export const CollapsibleAvatar = styled(Avatar)`
  flex-shrink: 0;
  margin-right: ${spacer(2)};
`;
