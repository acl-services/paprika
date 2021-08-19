import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

const AllVariations = () => {
  return (
    <>
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

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Long text with tooltip and with <code>isAutoCollapsed={false}</code>
      </Heading>

      <Breadcrumbs isAutoCollapsed={false}>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1 with long content, Breadcrumb 1 with long content.</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4 with long content, Breadcrumb 4 with long content.</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Breadcrumbs has only 1 item
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Not clickable breadcrumb item
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link as="span">Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4 with long content, Breadcrumb 4 with long content.</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Customized breadcrumb link
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link as="a" href={URL}>
          Breadcrumb 1
        </Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4 with long content, Breadcrumb 4 with long content.</Breadcrumbs.Link>
      </Breadcrumbs>

      <Gap />

      <Heading level={3} displayLevel={5} isLight>
        Breadcrumb link custom tooltip
      </Heading>

      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>
          Breadcrumb 4 with extra long content, Breadcrumb 4 with extra long content.
          <Breadcrumbs.Link.Tooltip zIndex={4000} />
        </Breadcrumbs.Link>
      </Breadcrumbs>
    </>
  );
};

export default AllVariations;
