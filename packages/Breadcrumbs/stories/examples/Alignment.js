import React from "react";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Heading from "@paprika/heading";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

const AllVariations = () => {
  return (
    <>
      <StoryHeading level={2}>Regular text</StoryHeading>
      <Gap.Small />
      <CodeHeading>{"<Breadcrumbs.Link>"}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <div>Heading</div>
      <Gap />
      <CodeHeading>{'<Breadcrumbs.Link as="a">'}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="a" href={URL}>
          Breadcrumb
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <div>Heading</div>
      <Gap />
      <CodeHeading>{'<Breadcrumbs.Link as="span">'}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="span">Breadcrumb</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <div>Heading</div>
      <Gap />
      <CodeHeading>
        {"<Breadcrumbs.Link>"} <span>x 1</span>
      </CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <div>Heading</div>

      <Gap.Large />

      <StoryHeading level={2}>Large Heading</StoryHeading>
      <Gap.Small />
      <CodeHeading>{"<Breadcrumbs.Link>"}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <Heading level={1}>Heading</Heading>
      <Gap />
      <CodeHeading>{'<Breadcrumbs.Link as="a">'}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="a" href={URL}>
          Breadcrumb
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <Heading level={1}>Heading</Heading>
      <Gap />
      <CodeHeading>{'<Breadcrumbs.Link as="span">'}</CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link as="span">Breadcrumb</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <Heading level={1}>Heading</Heading>
      <Gap />
      <CodeHeading>
        {"<Breadcrumbs.Link>"} <span>x 1</span>
      </CodeHeading>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb</Breadcrumbs.Link>
      </Breadcrumbs>
      <Heading level={1}>Heading</Heading>
    </>
  );
};

export default AllVariations;
