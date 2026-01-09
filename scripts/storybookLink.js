#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */
const { Octokit } = require("@octokit/rest");

if (!process.env.CI) {
  require("dotenv").config(); // eslint-disable-line
}

const owner = "acl-services";
const repo = "paprika";
const baseUrl = "http://storybooks.highbond-s3.com/paprika/";

// Use GITHUB_TOKEN (automatically provided in GitHub Actions, doesn't expire)
const { GITHUB_BRANCH_NAME, GITHUB_TOKEN } = process.env;

if (!GITHUB_BRANCH_NAME) {
  console.error("GITHUB_BRANCH_NAME is required but not set");
  process.exit(1);
}

if (!GITHUB_TOKEN) {
  console.error("GITHUB_TOKEN is required but not set");
  process.exit(1);
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

async function main() {
  try {
    const branchName = GITHUB_BRANCH_NAME;
    const targetUrl = `${baseUrl}${branchName}`;
    const placeholderUrl = `${baseUrl}your-branch-name`;
    
    const searchResult = await octokit.search.issuesAndPullRequests({
      q: `head:${branchName} repo:${owner}/${repo} type:pr`,
    });

    if (!searchResult.data.items || searchResult.data.items.length === 0) {
      console.error(`No PR found for branch: ${branchName}`);
      process.exit(1);
    }

    const pr = searchResult.data.items[0];
    const prNumber = pr.number;
    const prBody = pr.body || "";
    
    if (prBody.includes(targetUrl)) {
      console.log(`✅ Storybook URL is already correct: ${targetUrl}`);
      process.exit(0);
    }

    let updatedBody = prBody;
    if (prBody.includes(placeholderUrl)) {
      updatedBody = prBody.replace(placeholderUrl, targetUrl);
    } else {
      // Use explicit regex pattern with properly escaped hostname
      // Escape dots in hostname to match exact domain, not any character
      const escapedHostname = 'storybooks\\.highbond-s3\\.com';
      const storybookUrlPattern = new RegExp(`http://${escapedHostname}/paprika/[^\\s<>"']+`, 'g');
      if (storybookUrlPattern.test(prBody)) {
        updatedBody = prBody.replace(storybookUrlPattern, targetUrl);
      } else {
        console.error(`No Storybook URL or placeholder found in PR description`);
        process.exit(1);
      }
    }

    await octokit.issues.update({
      owner,
      repo,
      issue_number: prNumber,
      body: updatedBody,
    });

    console.log(`📙 Storybook URL updated: ${targetUrl}`);
    process.exit(0);
  } catch (error) {
    console.error(`Error updating Storybook link: ${error.message || error}`);
    process.exit(1);
  }
}

main();
