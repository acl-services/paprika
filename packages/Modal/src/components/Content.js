import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

const SPACE = spacer(2);

const Content = styled.div`
  padding: ${SPACE};
`;

Content.SPACE = SPACE;
Content.displayName = "Modal.Content";

export default Content;
