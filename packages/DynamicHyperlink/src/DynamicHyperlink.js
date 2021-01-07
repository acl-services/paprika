import "./DynamicHyperlink.scss";
// import { i18n } from "@paprika/l10n/lib/i18n";
import { i18n } from "../../L10n/src/i18n";

// what if they switch tabs, or chagne page with react-router?
//   the DOM gets updated so this needs to run again, right? MutationObserver
//   https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
// TODO: ignore those that are inside a ckEditor?
// TODO: is overwriting window.onload a problem? should i append to it?

// These todos are handled in another ticket i think:
// TODO: look for it in session
// TODO: if not there, do api lookup (sanitize what api returns)

let locale = "";
let terminology = {};

function run() {
  const dynamicHyperlinks = document.querySelectorAll("[data-dynamic-hyperlink]");
  const myI18n = i18n(null, locale);

  dynamicHyperlinks.forEach((dynamicHyperlink, index) => {
    const originalLinkText = dynamicHyperlink.innerHTML;
    dynamicHyperlink.innerHTML = myI18n.t("dynamicHyperlink.loading"); // eslint-disable-line no-param-reassign

    // THIS BLOCK IS JUST FILLER TO SIMULATE API
    let name;
    let id = "";
    let type = "";
    let className = "";

    switch (index) {
      case 0:
        name = "Name returned from API";
        id = "12345: ";
        type = terminology.control;
        className = "valid";
        break;
      case 1:
        name = originalLinkText;
        id = "";
        type = `- ${myI18n.t("dynamicHyperlink.access_denied")}`;
        className = "invalid";
        break;
      case 2:
        name = originalLinkText;
        id = "";
        type = `- ${myI18n.t("dynamicHyperlink.invalid_url")}`;
        className = "invalid";
        break;
      case 3:
        name = myI18n.t("dynamicHyperlink.loading");
        break;
      default:
        break;
    }
    // end THIS BLOCK IS JUST FILLER TO SIMULATE API

    dynamicHyperlink.innerHTML = `${id}${name}`; // eslint-disable-line no-param-reassign
    const mySpan = document.createElement("span");
    mySpan.innerHTML = type;
    mySpan.className = className;
    dynamicHyperlink.appendChild(mySpan);
  });
}

window.onload = () => {
  run();
};

export default function updateDynamicHyperlinks(_locale, _terminology) {
  locale = _locale;
  terminology = _terminology;
}
