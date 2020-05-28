const storyTree = [
  { category: "Basic", components: ["Spinner", "Heading"] },
  { category: "Forms", components: ["Input", "FormElement"] },
];

export function getStoryName(component) {
  return `${getCategory(component)} | ${component}`;
}

export function getCategory(component) {
  let found;
  storyTree.forEach(catList => {
    catList.compone;
    if (catList.components.includes(component)) found = catList.category;
  });
  return found;
}

export default storyTree;
