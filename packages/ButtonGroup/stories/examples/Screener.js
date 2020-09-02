import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import ButtonGroup from "../../src";

const ExampleStory = () => (
  <Story
    css={`
      max-width: 480px;
    `}
  >
    <ButtonGroup>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3}>Three</ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup kind={ButtonGroup.types.kind.PRIMARY}>
      <ButtonGroup.Item value={1} defaultIsActive>
        One
      </ButtonGroup.Item>
      <ButtonGroup.Item value={2} defaultIsActive>
        Two
      </ButtonGroup.Item>
      <ButtonGroup.Item value={3}>Three</ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup isMulti>
      <ButtonGroup.Item value={1} defaultIsActive>
        One
      </ButtonGroup.Item>
      <ButtonGroup.Item value={2} defaultIsActive>
        Two
      </ButtonGroup.Item>
      <ButtonGroup.Item value={3}>Three</ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons size={ButtonGroup.types.size.SMALL}>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons size={ButtonGroup.types.size.LARGE}>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons isSemantic>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons isDisabled>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons isSemantic>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2} isDisabled>
        Two
      </ButtonGroup.Item>
      <ButtonGroup.Item value={3} isDisabled defaultIsActive>
        Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three Three Three Three Three Three Three Three Three Three
      </ButtonGroup.Item>
    </ButtonGroup>
    <Gap />
    <ButtonGroup hasIcons isFullWidth>
      <ButtonGroup.Item value={1}>One</ButtonGroup.Item>
      <ButtonGroup.Item value={2}>Two</ButtonGroup.Item>
      <ButtonGroup.Item value={3} defaultIsActive>
        Three Three Three Three Three Three Three Three Three Three
      </ButtonGroup.Item>
    </ButtonGroup>
  </Story>
);

export default () => <ExampleStory />;
