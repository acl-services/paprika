#!/usr/bin/env node

const { GITHUB_PAPRIKA_TOKEN, SEMAPHORE_GIT_BRANCH, SEMAPHORE_GIT_URL, SEMAPHORE_GIT_SHA, ...more } = process.env;

console.log("GITHUB_PAPRIKA_TOKEN", GITHUB_PAPRIKA_TOKEN);
console.log("SEMAPHORE_GIT_BRANCH", SEMAPHORE_GIT_BRANCH);
console.log("SEMAPHORE_GIT_URL", SEMAPHORE_GIT_URL);
console.log("SEMAPHORE_GIT_SHA", SEMAPHORE_GIT_SHA);
console.log("===============================================================\n");
console.log("===============================================================\n");
console.log("===============================================================\n");
console.log("All", ...more);

/* eslint-disable import/no-extraneous-dependencies */
// require("dotenv").config();
// const Octokit = require("@octokit/rest");
//
// const owner = "acl-services";
// const repo = "paprika";
// const { SEMAPHORE_GIT_BRANCH, GITHUB_TOKEN } = process.env;
// const branch = "UX-501-semaphore-config"; // SEMAPHORE_GIT_BRANCH;
//
// const octokit = new Octokit({
//   auth: GITHUB_TOKEN,
// });
//
// const baseUrl = "http://storybooks.highbond-s3.com/paprika/";
//
// async function updateIssueBodyWithLink(issueNumber, body) {
//   const url = `${baseUrl}${branch}`;
//   const newBody = `${body} \n ### Storybook \n <a href='${url}' target="_blank" rel="noopener">${url}</a>`;
//   // const comment = await octokit.issues.update({
//   //   owner,
//   //   repo,
//   //   issue_number: issueNumber,
//   //   body,
//   // });
//   return newBody;
// }
//
// async function getPullRequests() {
//   const issues = await octokit.issues.listForRepo({
//     owner,
//     repo,
//   });
//
//   return issues.data.filter(issue => issue.state === "open" && "pull_request" in issue);
// }
//
// async function prsToUpdate() {
//   const prs = await getPullRequests();
//   const addCommentToThesePrs = prs.map(pr => (pr.body.includes(baseUrl) ? null : pr)).filter(chunk => chunk);
//   return addCommentToThesePrs;
// }
//
// async function getIssue(issueNumber) {
//   const issue = await octokit.issues.get({
//     owner,
//     repo,
//     issue_number: issueNumber,
//   });
//
//   return issue;
// }
//
// async function addStorybookComment() {
//   const prs = await prsToUpdate();
//   if (prs.length > 0) {
//     prs.forEach(async pr => {
//       const updatedBody = await updateIssueBodyWithLink(pr.number, pr.body);
//       const issue = await getIssue(pr.number);
//       console.log(issue);
//     });
//     return;
//   }
//
//   console.log("no prs need link");
// }
//
// async function Init() {
//   addStorybookComment();
// }
//
// Init();
