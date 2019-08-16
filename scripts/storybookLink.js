#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */
const Octokit = require("@octokit/rest");

if (!process.env.CI) {
  require("dotenv").config(); // eslint-disable-line
}
const owner = "acl-services";
const repo = "paprika";

const { SEMAPHORE_GIT_BRANCH, GITHUB_PAPRIKA_TOKEN = process.env.GITHUB_PAPRIKA_LOCAL_TOKEN } = process.env;

const octokit = new Octokit({
  auth: GITHUB_PAPRIKA_TOKEN,
});

const baseUrl = "http://storybooks.highbond-s3.com/paprika/";

async function updateIssueBodyWithLink(issueNumber, body) {
  try {
    const url = `${baseUrl}${SEMAPHORE_GIT_BRANCH}`;
    if (!body.includes(baseUrl)) {
      const newBody = `${body} \n ### 📙 Storybook \n <a href='${url}' target="_blank" rel="noopener">${url}</a>`;

      const updatedIssue = await octokit.issues.update({
        owner,
        repo,
        issue_number: issueNumber,
        body: newBody,
      });

      if (updatedIssue.status === 200) {
        console.log("📙 Awesome storybook url has been published!");
        return url;
      }

      return console.log(`Couldn't updated ${SEMAPHORE_GIT_BRANCH} branch, \n sorry ...`);
    }

    console.log(`This has been already updated ✌️`);
    return url;
  } catch (e) {
    console.log(`Couldn't updated ${SEMAPHORE_GIT_BRANCH} branch \n error: ${e}`);
    process.exit(0); // don't want to stop the build
  }
}

async function getIssueNumberAndBody() {
  try {
    const issueFetched = await octokit.search.issuesAndPullRequests({
      q: `head:${SEMAPHORE_GIT_BRANCH} repo:${owner}/${repo}`,
    });
    const { number, body } = issueFetched.data.items[0];

    return { number, body };
  } catch (e) {
    console.log(`Couldn't found ${SEMAPHORE_GIT_BRANCH} branch \n error: ${e}`);
    process.exit(0); // don't want to stop the build
  }
}

async function run() {
  const { number, body } = await getIssueNumberAndBody();
  const url = await updateIssueBodyWithLink(number, body);

  console.log(`url: ${url}`);
  process.exit(0);
}

run();
