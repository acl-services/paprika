/**
 * @param {string} branchName - The name of the current branch, eg: master, ux-123, ux-124/blah-blah, ux-125-blah-blah, ux-126_blah-blah
 * @return {string}           - Just the ticket part, eg: master, ux-123, ux-124, ux-125, ux-126
 */
const getFolderNameFromBranchName = branchName => {
  const chunks = branchName.split(/[^a-zA-Z\d]+/);
  return chunks.length > 1 ? `${chunks[0]}-${chunks[1]}` : chunks[0];
};

const copyStorybookToAws = folderName => {
  // add some node package to FTP files to AWS
  console.log(`Copy storybook-dist to: http://wegalvanize.design/product/paprika/storybook/${folderName}`);
};

const branchName = process.argv[2];
const folderName = getFolderNameFromBranchName(branchName);
copyStorybookToAws(folderName);
