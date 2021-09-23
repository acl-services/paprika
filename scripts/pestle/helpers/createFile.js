const fs = require("fs");
const path = require("path");

// Helper function to create files and directories using fs.
function createFile(filePath, template = "", overwriteFile = false) {
  try {
    // Create the directory if it doesn't already exist
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true }, err => {
        if (err) throw err;
      });
    }

    // Create the file
    if (!fs.existsSync(filePath) || overwriteFile) {
      fs.writeFileSync(filePath, template, {
        encoding: "utf8",
        flag: "w",
      });
      console.log("added:", filePath);
    } else {
      console.log("file already exists:", filePath);
    }
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createFile,
};
