import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const { Label, Content, Instructions, Description, Error, Layout } = FormElement;
const { LeftCol, RightCol } = Layout;

export default function Variations() {
  return (
    <FormElementStory
      storyName="Variations"
      tagline="The many moods of FormElements"
      component="FormElement"
      fileName="examples/Variations.js"
    >
      <L10n>
        <Gap.Small />
        <StoryHeading level={2}>FormElement sizes</StoryHeading>
        <FormElement size={FormElement.types.size.SMALL}>
          <Label help="Help yourself.">Field with small size</Label>
          <Content>{a11yProps => <Input size={Input.types.size.SMALL} {...a11yProps} />}</Content>
        </FormElement>
        <Gap.Small />
        <FormElement>
          <Label help="Help yourself.">Field with medium size</Label>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
        </FormElement>
        <Gap.Small />
        <FormElement size={FormElement.types.size.LARGE}>
          <Label help="Help yourself.">Field with large size</Label>
          <Content>{a11yProps => <Input size={Input.types.size.LARGE} {...a11yProps} />}</Content>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with instructions</StoryHeading>
        <FormElement>
          <Label help="Help yourself.">Field label</Label>
          <Instructions>
            These are some field instructions. Hashtag direct trade narwhal single-origin coffee irony. Banh mi brunch
            vegan semiotics aesthetic.
          </Instructions>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with description</StoryHeading>
        <FormElement>
          <Label help="Help yourself.">Field label</Label>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
          <Description>
            This is a description of the field. Vinyl vexillologist mustache copper mug vaporware you probably haven‘t
            heard of them.
          </Description>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with an error</StoryHeading>
        <FormElement>
          <Label help="Help yourself.">Field label</Label>
          <Content>{a11yProps => <Input {...a11yProps} hasError />}</Content>
          <Error>I‘ve made a huge mistake.</Error>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with isOptional</StoryHeading>
        <FormElement isOptional>
          <Label>Field label</Label>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with isRequired</StoryHeading>
        <FormElement isRequired>
          <Label help="Help yourself.">Field label</Label>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with isDisabled</StoryHeading>
        <FormElement isDisabled>
          <Label help="Help yourself.">Field label</Label>
          <Instructions>These are some field instructions.</Instructions>
          <Content>{a11yProps => <Input {...a11yProps} />}</Content>
          <Description>This is a description of the field.</Description>
        </FormElement>
        <Gap />
        <StoryHeading level={2}>FormElement with (inline) Layout</StoryHeading>
        <FormElement>
          <Layout>
            <LeftCol>
              <Label help="Help yourself.">Field label</Label>
            </LeftCol>
            <RightCol>
              <Content>{a11yProps => <Input {...a11yProps} />}</Content>
            </RightCol>
          </Layout>
        </FormElement>
      </L10n>
    </FormElementStory>
  );
}
