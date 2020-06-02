const storyTree = [
  { category: "Basic", components: ["Spinner", "Heading", "Toast"] },
  { category: "Forms", components: ["Input", "FormElement"] },
];

function getStoryName(component) {
  return `${getCategory(component)} | ${component}`;
}

function getCategory(component) {
  let found;
  storyTree.forEach(catList => {
    if (catList.components.includes(component)) found = catList.category;
  });
  return found;
}

module.exports = {
  getCategory,
  getStoryName,
  storyTree,
};
