import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import "./DynamicHyperlink.scss";

function isPromise(obj) {
  return obj && obj.then && typeof obj.then === "function";
}

export default function DynamicHyperlink({ onFetch }) {
  const I18n = useI18n();

  React.useEffect(() => {
    function updateDynamicHyperlinks() {
      const dynamicHyperlinkSelector = "[data-dynamic-hyperlink]";
      const dynamicHyperlinks = Array.from(document.querySelectorAll(dynamicHyperlinkSelector));

      document.querySelectorAll("iframe").forEach(iframe => {
        if (iframe.contentWindow.document.body) {
          iframe.contentWindow.document.body.querySelectorAll(dynamicHyperlinkSelector).forEach(dynamicHyperlink => {
            dynamicHyperlinks.push(dynamicHyperlink);
          });
        } else {
          setTimeout(updateDynamicHyperlinks, 100);
        }
      });

      dynamicHyperlinks
        .filter(dynamicHyperlink => !dynamicHyperlink.hasAttribute("data-dynamic-hyperlink--processed"))
        .forEach(dynamicHyperlink => {
          const originalLinkUrl = dynamicHyperlink.href;
          const attributeValue = dynamicHyperlink.getAttribute("data-dynamic-hyperlink");
          dynamicHyperlink.innerHTML = I18n.t("dynamicHyperlink.loading"); // eslint-disable-line no-param-reassign
          dynamicHyperlink.setAttribute("data-dynamic-hyperlink--processed", "true");

          // the consumer does the fetching of data
          const prom = onFetch(originalLinkUrl, attributeValue);
          if (isPromise(prom)) {
            prom
              .then(response => response.json())
              .then(response => {
                const { error, name, term } = response;

                const className = error ? "dynamic-hyperlink--invalid" : "dynamic-hyperlink--valid";
                const linkText = error ? originalLinkUrl : name;
                const errorText = error ? I18n.t(`dynamicHyperlink.${error}`) : "";

                dynamicHyperlink.innerHTML = linkText; // eslint-disable-line no-param-reassign
                const typeOrErrorSpan = document.createElement("span");
                typeOrErrorSpan.innerHTML = error ? `- ${errorText}` : term;
                typeOrErrorSpan.className = className;
                dynamicHyperlink.appendChild(typeOrErrorSpan);
              });
          } else {
            throw new Error("In DynamicHyperlink component, the onFetch prop must return a Promise");
          }
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
