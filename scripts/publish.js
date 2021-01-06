const fs = require("fs");
const shelljs = require("shelljs");
const { spawn } = require("child_process");
const { Octokit } = require("@octokit/core");

const changedPackages = [];
const ALPHA_TAG = "-alpha";

// (function findChanges() {
//   shelljs.ls("packages").forEach(folder => {
//     const path = `./packages/${folder}`;

//     try {
//       const { name, version } = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));

//       if (version.includes(ALPHA_TAG)) {
//         changedPackages.push(name);
//       }
//     } catch (e) {
//       console.warn(e);
//     }
//   });
// })();

// if (changedPackages.length === 0) {
//   console.warn("No changes to publish.");
//   return;
// }

// POST /repos/{owner}/{repo}/statuses/{sha}

const octokit = new Octokit({ auth: '9071a71a511e98dd177cdf28ac34d6baaa28ea12' });

async function test() {
  // const result = await octokit.request(`GET /repos/acl-services/paprika/pulls`)
  // console.log(result.data)

  const result = await octokit.request('POST /repos/acl-services/paprika/statuses/4b3d1d4c1e8702f62dfdf92bd39531f4763971ae', {
    state: 'success',
    context: 'Master branch status'
  })

  console.log(result.data)

  // 384281f7710c6285b75a5c594db8af6707446248
}

test().then(() => {
  console.log('done')
}, (e) => {
  console.log(e)
})

// spawn("sh", ["-c", `yarn lerna publish --force-publish=${changedPackages.join(",")}`], {
//   stdio: "inherit",
// });
