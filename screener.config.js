module.exports = {
  apiKey: process.env.SCREENER_API_KEY,
  baseBranch: "master",
  branch: process.env.SEMAPHORE_GIT_BRANCH,
  initialBaselineBranch: "master",
  projectRepo: "acl-services/paprika",
  resolution: "1280x1024",
  storybookConfigDir: ".storybook",
  storybookStaticDir: "./.storybook/assets",
  failureExitCode: 0, // Don't fail CI build when regressions found
  includeRules: [/Screener/, /Stylers/, /Button: Variations/],
};
