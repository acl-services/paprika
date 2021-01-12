import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import "./DynamicHyperlink.scss";

export default function DynamicHyperlink({ onFetch }) {
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

          // the consumer does the fetching of data
          onFetch(originalLinkUrl).then(({ error, name, term }) => {
            const className = error ? "invalid" : "valid";
            const linkText = error ? originalLinkUrl : name;
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
  }, [I18n, onFetch]);

  return null;
}

DynamicHyperlink.propTypes = { onFetch: PropTypes.func.isRequired };
