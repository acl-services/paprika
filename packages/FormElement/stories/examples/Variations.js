import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Input from "@paprika/input";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement from "../../src";

const Variations = () => {
  return (
    <FormElementStory storyName="Variations" tagline="The many moods of FormElements">
      <StoryHeading level={2}>FormElement sizes</StoryHeading>
      <FormElement label="Form with small size" size="small">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <FormElement label="Form with medium size">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <FormElement label="Form with large size" size="large">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with instructions</StoryHeading>
      <FormElement label="Form with instructions">
        <FormElement.Instructions>
          Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example text
          for extra panel for questionnaires. Example text for extra panel for questionnaires.
        </FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with description</StoryHeading>
      <FormElement label="Form with description">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
        <FormElement.Description>This is description text.</FormElement.Description>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with an error</StoryHeading>
      <FormElement label="Form with error">
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} hasError />}
        </FormElement.Content>
        <FormElement.Error>has an error</FormElement.Error>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with isInline</StoryHeading>
      <FormElement label="Form with isInline" isInline>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with hasOptionalLabel</StoryHeading>
      <FormElement label="Form with hasOptionalLabel" hasOptionalLabel>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with hasRequiredLabel</StoryHeading>
      <FormElement label="Form with hasRequiredLabel" hasRequiredLabel>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} />}
        </FormElement.Content>
      </FormElement>
      <Gap />
      <StoryHeading level={2}>FormElement with isDisabled</StoryHeading>
      <FormElement label="Form with isDisabled" isDisabled>
        <FormElement.Instructions>
          Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example text
          for extra panel for questionnaires. Example text for extra panel for questionnaires.
        </FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => <Input id={idForLabel} aria-describedby={ariaDescribedBy} isDisabled />}
        </FormElement.Content>
        <FormElement.Description>This is description text.</FormElement.Description>
      </FormElement>
    </FormElementStory>
  );
};

export default () => <Variations />;
