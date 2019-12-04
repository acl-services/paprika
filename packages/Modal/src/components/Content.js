import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

const Content = styled.div`
  padding: 0 ${spacer(2)} ${spacer(2)};
`;

Content.displayName = "Modal.Content";

export default Content;
