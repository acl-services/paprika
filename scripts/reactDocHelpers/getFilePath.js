const fs = require("fs");

function getFilePath(folderPath, componentName) {
  const fileName = fs.readdirSync(folderPath).find(name => new RegExp(`^${componentName}.(js|tsx)$`).test(name));

  return fileName ? `${folderPath}/${fileName}` : null;
}

module.exports = getFilePath;
