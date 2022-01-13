function renderStoryTreeObject(storyTree) {
  let storyTreeObjectTemplate = "";

  storyTree.forEach(category => {
    storyTreeObjectTemplate = storyTreeObjectTemplate.concat(`
  {
    category: "${category.category}",
    components: [${JSON.stringify(category.components, null, 6).replace(/^\[|]$/g, "")}    ],
  },`);
  });

  return storyTreeObjectTemplate;
}

function renderStoryTreeTemplate(view) {
  const { storyTree } = view;
  return `// prettier-ignore
const storyTree = [${renderStoryTreeObject(storyTree)}
];

function getCategory(component) {
  return storyTree.find(catList => catList.components.includes(component)).category;
}

function getStoryName(component) {
  return \`\${getCategory(component)}/\${component}\`;
}

function getStoryUrlPrefix(component) {
  return \`\${getCategory(component).toLowerCase()}-\${component.toLowerCase()}\`;
}

module.exports = {
  getCategory,
  getStoryName,
  getStoryUrlPrefix,
  storyTree,
};
`;
}

module.exports = {
  renderStoryTreeTemplate,
};
