import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/dynamic-hyperlink-api", (req, res, ctx) => {
    return res();
  })
);

worker.start();
