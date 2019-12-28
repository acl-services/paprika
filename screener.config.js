module.exports = {
  apiKey: "809f59e2-e260-4303-a661-7c69d72486ef",
  baseBranch: "master",
  branch: process.env.SEMAPHORE_GIT_BRANCH,
  // build: process.env.SEMAPHORE_WORKFLOW_ID,
  // commit: process.env.SEMAPHORE_GIT_SHA,
  initialBaselineBranch: "master",
  projectRepo: "acl-services/paprika",
  resolution: "1280x1024",
  storybookConfigDir: ".storybook",
  storybookStaticDir: "./.storybook/assets",
  failureExitCode: 0, // Don't fail CI builds
  includeRules: [/Screener/, /^Stylers/, /^Button: Basic/],
};
