import React from "react";
import { action } from "@storybook/addon-actions";
import { Rule } from "storybook/assets/styles/common.styles";
import { ButtonStory } from "../Button.stories.styles";
import Button from "../../Button";

const btnRef = React.createRef();
const btnRef2 = React.createRef();

const clickHandler = ref => () => {
  if (ref) {
    action(`Clicked on <${ref.current.nodeName.toLowerCase()}> ("${ref.current.innerText}")`)();
  } else {
    action("Clicked a button")();
  }
};

const PopoverStory = () => (
  <ButtonStory>
    <p>
      <Button ariaText="ceci n'est pas un bouton" buttonRef={btnRef} onClick={clickHandler(btnRef)}>
        default button
      </Button>

      <Button onClick={clickHandler(btnRef2)} buttonRef={btnRef2} isDisabled>
        disabled button
      </Button>
    </p>
    <Rule />
    <p>
      <Button isFullWidth onClick={clickHandler()}>
        full width
      </Button>
    </p>
    <p>
      <Button onClick={clickHandler()}>
        long button lumbersexual authentic <br /> vegan vaporware scenester humblebrag
      </Button>
    </p>
    <Rule />
    <p>
      <Button size="xsmall" onClick={clickHandler()}>
        xsmall
      </Button>
      <Button size="small" onClick={clickHandler()}>
        small
      </Button>
      <Button onClick={clickHandler()}>medium</Button>
      <Button size="large" onClick={clickHandler()}>
        large
      </Button>
      <Button size="xlarge" onClick={clickHandler()}>
        xlarge
      </Button>
    </p>
    <Rule />
    <p>
      <Button onClick={clickHandler()}>default</Button>
      <Button type="primary" onClick={clickHandler()}>
        primary
      </Button>
      <Button type="secondary" onClick={clickHandler()}>
        secondary
      </Button>
      <Button type="destructive" onClick={clickHandler()}>
        destructive
      </Button>
      <Button type="flat" onClick={clickHandler()}>
        flat
      </Button>
      <Button type="minor" onClick={clickHandler()}>
        minor
      </Button>
      <Button type="link" onClick={clickHandler()}>
        link
      </Button>
    </p>
    <Rule />
    <p>
      <Button isSemantic={false} size="large" type="primary" isActive onClick={clickHandler()}>
        raw large active primary
      </Button>
      <Button isSemantic={false} isDisabled onClick={clickHandler()}>
        raw default disabled
      </Button>
      <Button isSemantic={false} type="link" size="small" onClick={clickHandler()}>
        raw small link
      </Button>
    </p>
    {[
      ...Array(34)
        .fill()
        .keys(),
    ].map(index => (
      <br key={index} />
    ))}
    ...fin.
  </ButtonStory>
);

export default PopoverStory;
