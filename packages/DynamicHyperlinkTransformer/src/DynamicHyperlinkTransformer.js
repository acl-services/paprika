import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import "./DynamicHyperlinkTransformer.scss";

const dynamicHyperlinkSelector = "[data-dynamic-hyperlink]";

function isPromise(obj) {
  return obj && obj.then && typeof obj.then === "function";
}

function onElementReady(getElement) {
  return new Promise(resolve => {
    function waitForElement() {
      if (getElement()) {
        resolve(getElement());
      } else {
        window.requestAnimationFrame(waitForElement);
      }
    }
    waitForElement();
  });
}

async function getDynamicHyperlinksInCkEditor(iframe) {
  console.log(26, "getting all the links in an iframe...");
  const iframeBody = await onElementReady(() => iframe.contentWindow.document.body);
  console.log(28, "...done getting all the links in an iframe");
  const dynamicHyperlinks = [];

  iframeBody.querySelectorAll(dynamicHyperlinkSelector).forEach(dynamicHyperlink => {
    console.log(32, "got a link in an iframe!");
    dynamicHyperlinks.push(dynamicHyperlink);
  });

  return dynamicHyperlinks;
}

async function getDynamicHyperlinks() {
  console.log(40, "getting all the links...");
  const dynamicHyperlinksInCkEditors = [];
  const dynamicHyperlinksInPage = Array.from(document.querySelectorAll(dynamicHyperlinkSelector));

  await document.querySelectorAll("iframe.cke_wysiwyg_frame").forEach(async iframe => {
    const dynamicHyperlinksInCkEditor = await getDynamicHyperlinksInCkEditor(iframe);
    console.log(46, "...got all the links in an iframe");
    dynamicHyperlinksInCkEditors.push(...dynamicHyperlinksInCkEditor);
  });

  return [...dynamicHyperlinksInCkEditors, ...dynamicHyperlinksInPage];
}

export default function DynamicHyperlinkTransformer({ onFetch }) {
  const I18n = useI18n();

  React.useEffect(() => {
    async function updateDynamicHyperlinks() {
      console.log("-------");
      const dynamicHyperlinks = await getDynamicHyperlinks();

      console.log(61, "...got all the links !!!this should be the very last message!!!");
      // it is getting here before the onIframeReady() gets called, so there is no link

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
                console.log(89, typeOrErrorSpan);
              });
          } else {
            throw new Error("In DynamicHyperlinkTransformer component, the onFetch prop must return a Promise");
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

DynamicHyperlinkTransformer.propTypes = { onFetch: PropTypes.func.isRequired };
