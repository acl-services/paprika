import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import tokens from "@acl-ui/tokens";
import stylers from "@acl-ui/stylers";

const Box = styled.div`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  margin-bottom: ${stylers.spacer(2)};
  padding: ${stylers.spacer(2)};
  width: 280px;
`;

const TruncatedBox = styled(Box)`
  ${stylers.truncateText};
`;

const UntruncatedBox = styled(TruncatedBox)`
  ${stylers.noTruncateText};
`;

const InvisibleBox = styled(Box)`
  ${stylers.visuallyHidden};
`;

const InputWithPlaceholder = styled.input`
  ${stylers.placeholders};
`;

storiesOf("Stylers", module).add("Include Examples", () => (
  <div className="story-body">
    <h1>Include Examples</h1>
    <h4>
      <code>stylers.truncateText</code>
    </h4>
    <TruncatedBox>Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.</TruncatedBox>

    <h4>
      <code>stylers.noTruncateText</code>
    </h4>
    <UntruncatedBox>
      Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.
    </UntruncatedBox>

    <h4>
      <code>stylers.visuallyHidden</code>
    </h4>
    <InvisibleBox>👻</InvisibleBox>

    <h4>
      <code>stylers.placeholders</code>
    </h4>
    <Box>
      <InputWithPlaceholder placeholder="placeholder" />
      <br />
      <InputWithPlaceholder placeholder="placeholder" disabled />
      <br />
      <InputWithPlaceholder placeholder="placeholder" className="is-readonly" value="value" />
    </Box>
  </div>
));
