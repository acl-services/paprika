// Default story parameters for different types of stories

const storyParameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
  viewMode: "story",
};
export default storyParameters;

// Docs page (MDX)
export const docsStoryParameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
};

// Showcase stories (with knobs)
export const showcaseStoryParameters = {
  options: {
    isToolshown: true,
    showPanel: true,
    panelPosition: "right",
  },
  viewMode: "story",
};

// Variations stories
export const variationsStoryParameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
  viewMode: "story",
};

// Examples stories
export const exampleStoryParameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
  viewMode: "story",
};

// Testing stories
export const testStoryParameters = {
  options: {
    isToolshown: false,
    showPanel: false,
  },
  viewMode: "story",
};
