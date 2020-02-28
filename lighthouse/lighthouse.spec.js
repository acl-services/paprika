import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import fs from "fs";
import server from "./server";

let browser;
let port;
const STORY_ROOT = "http://localhost:9000/iframe.html";

jest.setTimeout(50000);

const desktopDense4G = {
  rttMs: 40,
  throughputKbps: 10 * 1024,
  cpuSlowdownMultiplier: 1,
  requestLatencyMs: 0, // 0 means unset
  downloadThroughputKbps: 0,
  uploadThroughputKbps: 0,
};

/** @type {LH.Config.Json} */
const config = {
  extends: "lighthouse:default",
  settings: {
    output: "html",
    maxWaitForFcp: 15 * 1000,
    maxWaitForLoad: 35 * 1000,
    emulatedFormFactor: "desktop",
    throttling: desktopDense4G,
    // Skip the h2 audit so it doesn't lie to us. See https://github.com/GoogleChrome/lighthouse/issues/6539
    skipAudits: ["uses-http2"],
  },
};

async function runLighthouse(url) {
  return lighthouse(url, { port, onlyCategories: ["performance", "accessibility"] }, config).then(results => {
    return results;
  });
}

function getStoryUrl(storyId) {
  return `${STORY_ROOT}?id=${storyId}`;
}

expect.extend({
  toHaveLighthouseScoreGreaterThanOrEqual(lhr, category, threshold) {
    const score = lhr.categories[category].score;
    const auditsRefsByWeight = [...lhr.categories[category].auditRefs]
      .filter(auditRef => auditRef.weight > 0)
      .sort((a, b) => b.weight - a.weight);
    const report = auditsRefsByWeight
      .map(auditRef => {
        const audit = lhr.audits[auditRef.id];
        const status = audit.score === 1 ? this.utils.EXPECTED_COLOR("○") : this.utils.RECEIVED_COLOR("✕");
        const weight = this.utils.DIM_COLOR(`[weight: ${auditRef.weight}]`);
        return `\t${status} ${weight} ${audit.id}`;
      })
      .join("\n");

    if (score >= threshold) {
      return {
        pass: true,
        message: () => `expected category ${category} to be < ${threshold}, but got ${score}\n${report}`,
      };
    }
    return {
      pass: false,
      message: () => `expected category ${category} to be >= ${threshold}, but got ${score}\n${report}`,
    };
  },
});

describe("Paprika lighthouse testing", () => {
  beforeAll(async () => {
    await new Promise(resolve => server.listen(9000, resolve));
    console.log(`Storybook server listening on port 9000`);
    await launch({
      chromeFlags: ["--show-paint-rects", "--headless"],
    }).then(chrome => {
      browser = chrome;
      port = chrome.port;
    });
  });

  afterAll(async () => {
    await browser.kill();
    await new Promise(resolve => server.close(resolve));
  });

  it("Button component", async () => {
    const results = await runLighthouse(getStoryUrl("button-examples--basic"));
    const { lhr, report } = results;
    fs.writeFileSync("lighthouse/lhr/Button.html", report);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("performance", 0.2);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("accessibility", 0.9);
  });

  it("RawButton component", async () => {
    const { lhr, report } = await runLighthouse(getStoryUrl("rawbutton--basic"));
    fs.writeFileSync("lighthouse/lhr/RawButton.html", report);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("performance", 0.2);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("accessibility", 0.9);
  });

  it("FormElement component", async () => {
    const { lhr, report } = await runLighthouse(getStoryUrl("formelement--alternatelayouts"));
    fs.writeFileSync("lighthouse/lhr/FormElement.html", report);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("performance", 0.2);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("accessibility", 0.9);
  });

  it("Sidepanel component", async () => {
    const { lhr, report } = await runLighthouse(getStoryUrl("sidepanel--basic"));
    fs.writeFileSync("lighthouse/lhr/Sidepanel.html", report);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("performance", 0.2);
    expect(lhr).toHaveLighthouseScoreGreaterThanOrEqual("accessibility", 0.9);
  });
});
