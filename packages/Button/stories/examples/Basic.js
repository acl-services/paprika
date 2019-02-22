import React from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
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
  <Story>
    <p>Freegan squid pug heirloom letterpress pork belly, readymade you probably haven’t heard of them.</p>
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
    <hr />
    <p>
      <Button ariaText="ceci n'est pas un bouton" buttonRef={btnRef} onClick={clickHandler(btnRef)}>
        Long button lumbersexual authentic <br /> vegan vaporware scenester humblebrag
      </Button>
    </p>
    <p>
      <Button onClick={clickHandler(btnRef2)} buttonRef={btnRef2} isDisabled>
        Disabled button
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
  </Story>
);

export default PopoverStory;
