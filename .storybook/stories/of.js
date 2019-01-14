import React from "react";
import { storiesOf as storybookStoriesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import Story from "storybook/stories/components/Story/Story";
import categories from "storybook/stories/categories";

const filterCategoriesByRouteName = route =>
  Object.keys(categories).map(key => {
    const categoriesSet = new Set(categories[key].map(item => item));
    const componentNameSet = new Set(route.split("/"));
    const intersection = [...categoriesSet].filter(category => componentNameSet.has(category));
    if (intersection.length) {
      // theoretically if you include the name of two component in the path of the story
      // you will end with a wron name :/ edge case.
      return { name: key, component: intersection[0] };
    }

    return null;
  });

export const spicyStory = ({ storyPath, componentName, isBeta, content }) => story => {
  const component = story();
  return (
    <Story
      content={content}
      component={component}
      componentName={componentName}
      isBeta={isBeta}
      storyPath={storyPath}
    />
  );
};

const storiesOf = (route, { content = null, isBeta = false } = {}) => {
  const category = filterCategoriesByRouteName(route);
  const hasCategory = category.includes(undefined);
  const categoryName = hasCategory ? "Without Category" : category[0].name;
  const componentName = hasCategory ? "" : category[0].component;
  const storyPath = `${categoryName}/${route}`;

  const options = {
    isBeta,
    storyPath,
    componentName,
    content,
  };

  return storybookStoriesOf(storyPath, module)
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .addDecorator(spicyStory(options));
};

export default storiesOf;
