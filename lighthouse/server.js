import http from "http";
import url from "url";
import fs from "fs";
import path from "path";

export default http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = `./storybook-dist/${parsedUrl.pathname}`;
  const ext = path.parse(pathname).ext;
  const map = {
    ".ico": "image/x-icon",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
  };

  fs.exists(pathname, exist => {
    if (!exist) {
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    if (fs.statSync(pathname).isDirectory()) pathname += `/index${ext}`;

    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        res.setHeader("Content-type", map[ext] || "text/plain");
        res.end(data);
      }
    });
  });
});
