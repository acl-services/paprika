import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Input from "@paprika/input";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const { Label, Content, Instructions, Description, Error } = FormElement;

const Variations = () => {
  return (
    <FormElementStory storyName="Variations" tagline="The many moods of FormElements">
      <StoryHeading level={2}>FormElement sizes</StoryHeading>
      <FormElement size="small">
        <Label>Form with small size</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <FormElement>
        <Label>Form with medium size</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <FormElement size="large">
        <Label>Form with large size</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with instructions</StoryHeading>
      <FormElement>
        <Label>Form with instructions</Label>
        <Instructions>
          Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example text
          for extra panel for questionnaires. Example text for extra panel for questionnaires.
        </Instructions>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with description</StoryHeading>
      <FormElement>
        <Label>Form with description</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
        <Description>This is description text.</Description>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with an error</StoryHeading>
      <FormElement>
        <Label>Form with error</Label>
        <Content>{a11yProps => <Input {...a11yProps} hasError />}</Content>
        <Error>has an error</Error>
      </FormElement>
      <Gap />
      <Gap />
      <StoryHeading level={2}>FormElement with hasOptionalLabel</StoryHeading>
      <FormElement hasOptionalLabel>
        <Label>Form with hasOptionalLabel</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with hasRequiredLabel</StoryHeading>
      <FormElement hasRequiredLabel>
        <Label>Form with hasRequiredLabel</Label>
        <Content>{a11yProps => <Input {...a11yProps} />}</Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with isDisabled</StoryHeading>
      <FormElement isDisabled>
        <Label>Form with isDisabled</Label>
        <Instructions>
          Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example text
          for extra panel for questionnaires. Example text for extra panel for questionnaires.
        </Instructions>
        <Content>{a11yProps => <Input {...a11yProps} isDisabled />}</Content>
        <Description>This is description text.</Description>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Variations />;
