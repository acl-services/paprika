import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import PlusIcon from "@paprika/icon/lib/Add";
import Button from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

export default function ButtonVariations() {
  return (
    <>
      <Button a11yText="ceci n'est pas un bouton" data-pka-anchor="test-button" onClick={clickHandler}>
        default button
      </Button>
      <Button onClick={clickHandler} isDisabled>
        disabled button
      </Button>
      <Button onClick={clickHandler} isDisabled isSemantic={false} tabIndex={0}>
        disabled but tabbable
      </Button>
      <Gap />
      <Button isSubmit onClick={clickHandler}>
        submit
      </Button>
      <Gap />
      <Button onClick={clickHandler}>
        long button lumbersexual authentic <br /> vegan vaporware scenester humblebrag
      </Button>
      <Gap />
      <Button isFullWidth onClick={clickHandler}>
        full width
      </Button>
      <Gap />
      <Button size="small" onClick={clickHandler}>
        small
      </Button>
      <Button onClick={clickHandler}>medium</Button>
      <Button size="large" onClick={clickHandler}>
        large
      </Button>
      <Gap />
      <Button onClick={clickHandler}>default</Button>
      <Button kind="primary" onClick={clickHandler}>
        primary
      </Button>
      <Button kind="secondary" onClick={clickHandler}>
        secondary
      </Button>
      <Button kind="destructive" onClick={clickHandler}>
        destructive
      </Button>
      <Button kind="flat" onClick={clickHandler}>
        flat
      </Button>
      <Button kind="minor" onClick={clickHandler}>
        minor
      </Button>
      <Button kind="link" onClick={clickHandler}>
        link
      </Button>
      <Gap />
      <Button onClick={clickHandler} isActive>
        active button
      </Button>
      <Button onClick={clickHandler} isActive kind="primary">
        active button
      </Button>
      <Button onClick={clickHandler} isActive kind="flat">
        active button
      </Button>
      <Button onClick={clickHandler} isActive kind="minor">
        active button
      </Button>
      <Button onClick={clickHandler} isActive kind="link">
        active button
      </Button>
      <Gap />
      <Button isSemantic={false} onClick={clickHandler}>
        raw
      </Button>
      <Button isSemantic={false} isDisabled onClick={clickHandler}>
        raw disabled
      </Button>
      <Button isSemantic={false} size="large" kind="primary" isActive onClick={clickHandler}>
        raw large active primary
      </Button>
      <Button isSemantic={false} kind="link" size="small" onClick={clickHandler}>
        raw small link
      </Button>
      <Gap />
      <Button onClick={clickHandler} icon={<PlusIcon />} size="small">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />}>
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} size="large">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="minor">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="link">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="flat">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="primary">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="primary" isDisabled>
        with icon
      </Button>
      <Gap />
      <Button onClick={clickHandler} isDisabled>
        disabled
      </Button>
      <Button onClick={clickHandler} isDisabled kind="primary">
        disabled primary
      </Button>
      <Button onClick={clickHandler} isDisabled kind="minor">
        disabled minor
      </Button>
      <Button onClick={clickHandler} isDisabled kind="link">
        disabled kind=link
      </Button>
      <Gap />
      <Button onClick={clickHandler} icon={<PlusIcon />} isPending>
        Pending...
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} isDropdown>
        Menu
      </Button>
    </>
  );
}
