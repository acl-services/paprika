import React from "react";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

const AllVariations = () => {
  return (
    <>
      <StoryHeading level={3}>Short version</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap.Small />
      <StoryHeading level={3}>Long version</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 5</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 6</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap.Small />
      <StoryHeading level={3}>Single breadcrumb</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap />

      <StoryHeading level={3}>Long text with tooltip</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1 with long content, Breadcrumb 1 with long content.</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 5</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap.Small />
      <CodeHeading>{"isAutoCollapsed={false}"}</CodeHeading>
      <Breadcrumbs isAutoCollapsed={false}>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1 with long content, Breadcrumb 1 with long content.</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 5</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap />

      <StoryHeading level={3}>Breadcrumb without link</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="span">Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap.Small />
      <StoryHeading level={3}>Customized breadcrumb link</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="button">Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap />

      <StoryHeading level={3}>Breadcrumb with custom tooltip props</StoryHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>
          Breadcrumb with extra long content, Breadcrumb with extra long content.
          <Breadcrumbs.Link.Tooltip zIndex={4000} />
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
      </Breadcrumbs>
      <Gap />

      <StoryHeading level={3}>Dark version</StoryHeading>
      <CodeHeading>{"isDark={true}"}</CodeHeading>
      <div style={{ padding: "16px", background: "#3f3d3c" }}>
        <Breadcrumbs isDark>
          <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
          <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default AllVariations;
