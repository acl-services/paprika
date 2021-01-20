import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import "./DynamicHyperlinkTransformer.scss";

const dynamicHyperlinkSelector = "[data-dynamic-hyperlink]";

function isPromise(obj) {
  return obj && obj.then && typeof obj.then === "function";
}

function getDynamicHyperlinks(document) {
  return Array.from(document.querySelectorAll(dynamicHyperlinkSelector));
}

export default function DynamicHyperlinkTransformer({ onFetch }) {
  const I18n = useI18n();

  React.useEffect(() => {
    function updateDynamicHyperlinks(document) {
      const dynamicHyperlinks = getDynamicHyperlinks(document);

      dynamicHyperlinks
        .filter(dynamicHyperlink => !dynamicHyperlink.hasAttribute("data-dynamic-hyperlink--processed"))
        .forEach(dynamicHyperlink => {
          const originalLinkUrl = dynamicHyperlink.href;
          const attributeValue = dynamicHyperlink.getAttribute("data-dynamic-hyperlink");
          dynamicHyperlink.innerHTML = I18n.t("dynamicHyperlinkTransformer.loading"); // eslint-disable-line no-param-reassign
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
                const errorText = error ? I18n.t(`dynamicHyperlinkTransformer.${error}`) : "";

                dynamicHyperlink.innerHTML = linkText; // eslint-disable-line no-param-reassign
                const typeOrErrorSpan = document.createElement("span");
                typeOrErrorSpan.innerHTML = error ? `- ${errorText}` : term;
                typeOrErrorSpan.className = className;
                dynamicHyperlink.appendChild(typeOrErrorSpan);
              });
          } else {
            throw new Error("In DynamicHyperlinkTransformer component, the onFetch prop must return a Promise");
          }
        });
    }

    function getCkEditorInstances() {
      const ckEditorInstances = window.CKEDITOR && window.CKEDITOR.instances;
      return ckEditorInstances && Object.keys(ckEditorInstances).length ? ckEditorInstances : null;
    }

    function updateDynamicHyperlinksWhenReady() {
      const ckEditorInstances = getCkEditorInstances();

      if (ckEditorInstances) {
        Object.entries(ckEditorInstances).forEach(([, ckEditorInstance]) => {
          ckEditorInstance.on("instanceReady", () => {
            updateDynamicHyperlinks(ckEditorInstance.document.$);
          });
        });
      } else {
        updateDynamicHyperlinks(document);
      }
    }

    const observer = new MutationObserver(updateDynamicHyperlinksWhenReady);
    const config = { childList: true, subtree: true };
    observer.observe(document.querySelector("body"), config);

    updateDynamicHyperlinksWhenReady();

    return () => observer.disconnect();
  }, [I18n, onFetch]);

  return null;
}

DynamicHyperlinkTransformer.propTypes = { onFetch: PropTypes.func.isRequired };
