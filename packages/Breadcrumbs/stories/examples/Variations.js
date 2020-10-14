import React from "react";
import { Story, Tagline, Gap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

const ExampleStory = () => {
  return (
    <Story
      css={`
        h2 {
          margin-top: 32px;
          color: #999;
        }
      `}
    >
      <Heading level={1} displayLevel={2} isLight>
        Breadcrumbs
      </Heading>
      <Tagline>
        <big>
          <strong>Variations</strong>
        </big>{" "}
        – Browse use cases + recipes
      </Tagline>

      <Gap />

      <Heading level={2} displayLevel={4} isLight hasDivider>
        All kinds
      </Heading>

      <Heading level={3} displayLevel={5} isLight>
        Short version
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Long version
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 5</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 6</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        <code>isDark=&quot;true&quot;</code>
      </Heading>

      <div style={{ padding: "16px", background: "#3f3d3c" }}>
        <Breadcrumbs isDark>
          <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        </Breadcrumbs>
      </div>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Long text with tooltip
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1 with long content, Breadcrumb 1 with long content.</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4 with long content, Breadcrumb 4 with long content.</Breadcrumbs.Link>
      </Breadcrumbs>
    </Story>
  );
};

export default ExampleStory;
