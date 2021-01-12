import React from "react";
import PropTypes from "prop-types";
// import useI18n from "@paprika/l10n/lib/useI18n"; // new translations havent been released yet
import useI18n from "../../L10n/lib/useI18n";
import "./DynamicHyperlink.scss";

// TODO: ignore those that are inside a ckEditor?
// TODO: nahum suggested looking at a webworker

function fetchFromApi(url) {
  // Fetch from sessionStorage or API
  return new Promise(resolve => {
    switch (url) {
      case "www.google1.ca":
        resolve({ name: "Name returned from API", id: 12345, term: "CONTROL", error: null });
        break;
      case "www.google2.ca":
        resolve({ name: "", id: "", term: "", error: "access_denied" });
        break;
      case "www.google3.ca":
        resolve({ name: "", id: "", term: "", error: "invalid_url" });
        break;
      default:
        break;
    }
  });
}

export default function DynamicHyperlink() {
  const I18n = useI18n();

  React.useEffect(() => {
    function updateDynamicHyperlinks() {
      const dynamicHyperlinks = Array.from(document.querySelectorAll("[data-dynamic-hyperlink]"));

      dynamicHyperlinks
        .filter(dynamicHyperlink => !dynamicHyperlink.hasAttribute("data-dynamic-hyperlink--processed"))
        .forEach(dynamicHyperlink => {
          const originalLinkUrl = dynamicHyperlink.innerHTML;
          dynamicHyperlink.innerHTML = I18n.t("dynamicHyperlink.loading"); // eslint-disable-line no-param-reassign
          dynamicHyperlink.setAttribute("data-dynamic-hyperlink--processed", "true");

          // THIS IS JUST A PLACEHOLDER TO SIMULATE API
          fetchFromApi(originalLinkUrl).then(({ error, id, name, term }) => {
            const className = error ? "invalid" : "valid";
            const linkText = error ? originalLinkUrl : `${id}: ${name}`;
            const errorText = error ? I18n.t(`dynamicHyperlink.${error}`) : "";

            dynamicHyperlink.innerHTML = linkText; // eslint-disable-line no-param-reassign
            const typeOrErrorSpan = document.createElement("span");
            typeOrErrorSpan.innerHTML = error ? `- ${errorText}` : term;
            typeOrErrorSpan.className = className;
            dynamicHyperlink.appendChild(typeOrErrorSpan);
          });
        });
    }

    const observer = new MutationObserver(updateDynamicHyperlinks);
    const config = { childList: true, subtree: true };
    observer.observe(document.querySelector("body"), config);

    updateDynamicHyperlinks();

    return () => observer.disconnect();
  }, []);

  return null;
}

DynamicHyperlink.propTypes = { terms: PropTypes.object.isRequired }; // eslint-disable-line react/forbid-prop-types
