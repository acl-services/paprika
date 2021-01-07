import React from "react";
import PropTypes from "prop-types";
// import useI18n from "@paprika/l10n/lib/useI18n"; // new translations havent been released yet
import useI18n from "../../L10n/lib/useI18n";
import "./DynamicHyperlink.scss";

// what if they switch tabs, or change page with react-router?
//   the DOM gets updated so this needs to run again, right? MutationObserver
//   https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
// TODO: ignore those that are inside a ckEditor?
// TODO: nahum suggested looking at a webworker

function fetchFromApi(url) {
  return new Promise(resolve => {
    switch (url) {
      case "www.google1.ca":
        resolve({ name: "Name returned from API", id: 12345, type: "control", error: null });
        break;
      case "www.google2.ca":
        resolve({ name: "", id: "", type: "", error: "access_denied" });
        break;
      case "www.google3.ca":
        resolve({ name: "", id: "", type: "", error: "invalid_url" });
        break;
      default:
        break;
    }
  });
}

export default function DynamicHyperlink({ terms }) {
  const I18n = useI18n();

  React.useEffect(() => {
    const dynamicHyperlinks = document.querySelectorAll("[data-dynamic-hyperlink]");

    dynamicHyperlinks.forEach(dynamicHyperlink => {
      const originalLinkUrl = dynamicHyperlink.innerHTML;
      dynamicHyperlink.innerHTML = I18n.t("dynamicHyperlink.loading"); // eslint-disable-line no-param-reassign

      // THIS IS JUST A PLACEHOLDER TO SIMULATE API
      fetchFromApi(originalLinkUrl).then(({ error, id, name, type }) => {
        const className = error ? "invalid" : "valid";
        const linkText = error ? originalLinkUrl : `${id}: ${name}`;
        const errorText = error ? I18n.t(`dynamicHyperlink.${error}`) : "";

        dynamicHyperlink.innerHTML = linkText; // eslint-disable-line no-param-reassign
        const typeOrErrorSpan = document.createElement("span");
        typeOrErrorSpan.innerHTML = error ? `- ${errorText}` : terms[type];
        typeOrErrorSpan.className = className;
        dynamicHyperlink.appendChild(typeOrErrorSpan);
      });
    });
  }, []);

  return null;
}

DynamicHyperlink.propTypes = { terms: PropTypes.object.isRequired };
