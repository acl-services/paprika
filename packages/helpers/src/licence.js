/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */

const legally = require("legally");
const fs = require("fs");

console.log("buckle up, it will take sometime ...");

let done = false;
done = (function wait() {
  if (!done) setTimeout(wait, 1000);
})();

(async () => {
  const licenses = await legally();

  // tab delimiters which can be open as excel file
  const header = `package\tlicence\n`;
  const writeStream = fs.createWriteStream("./licence.xls");

  writeStream.write(header);
  for (const licence in licenses) {
    const row = `${licence}\t${licenses[licence].copying}\n`;
    writeStream.write(row);
    console.log(row);
  }

  writeStream.close();

  done = true;
})();
