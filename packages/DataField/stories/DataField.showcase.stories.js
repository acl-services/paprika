import React from "react";
import L10n from "@paprika/l10n";

import { getStoryName } from "storybook/storyTree";
import styled, { css } from "styled-components";
import DataField from "../src";

export default {
  title: getStoryName("DataField"),
};

const Container = styled.div(
  () => css`
    [data-pka-anchor="data-field.numeric"] {
      font-size: 32px;
    }
  `
);

export const Showcase = () => (
  <div style={{ padding: "32px" }}>
    <h2>Table</h2>
    <h3>German locale with US currency</h3>
    <L10n locale="de">
      <Container>
        <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" value={1240} />
      </Container>
    </L10n>
  </div>
);
