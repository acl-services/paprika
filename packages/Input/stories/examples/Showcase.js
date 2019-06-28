import React from "react";

storiesOf("Forms|Input", module)
  .addDecorator(withKnobs)
  .addDecorator(InputStoryStyles)
  .addDecorator(InputStoryControl)
  .add("Showcase", ({ onChange, onClear, value }) => (
    <Input
      onChange={onChange}
      onClear={onClear}
      value={value}
      size={select("size", ShirtSizes.DEFAULT, "medium")}
      placeholder={text("placeholder", "Enter some text")}
      icon={iconSelections[select("icon", Object.keys(iconSelections), null)]}
      hasClearButton={boolean("hasClearButton", false)}
      isDisabled={boolean("isDisabled", false)}
      isReadOnly={boolean("isReadOnly", false)}
      hasError={boolean("hasError", false)}
      type={select("type", ["password", "text"], "text")}
      a11yText={text("a11yText", "")}
    />
  ));
