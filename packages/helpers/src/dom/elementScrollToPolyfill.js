// https://github.com/idmadj/element-scroll-polyfill/blob/master/index.js
/* eslint-disable */
/* prettier-ignore */
(function() {
  const normalizeNonFiniteValue = function normalizeNonFiniteValue(value) {
    value = +value;
    return isNaN(value) || value == Infinity || value == -Infinity ? 0 : value;
  };

  const isBodyPotentiallyScrollable = function(body) {
    body = body || document.getElementsByTagName("BODY")[0];

    const bodyComputedStyle = window.getComputedStyle(body);
    const parentComputedStyle = window.getComputedStyle(body.parent);
    const bodyComputedOverflowX = bodyComputedStyle.overflowX;
    const bodyComputedOverflowY = bodyComputedStyle.overflowY;
    const parentComputedOverflowX = parentComputedStyle.overflowX;
    const parentComputedOverflowY = parentComputedStyle.overflowY;

    return (
      (bodyComputedStyle.display == "table-column" || bodyComputedStyle.display == "table-column-group") &&
      (parentComputedOverflowX != "visible" &&
        parentComputedOverflowX != "clip" &&
        parentComputedOverflowY != "visible" &&
        parentComputedOverflowY != "clip") &&
      (bodyComputedOverflowX != "visible" &&
        bodyComputedOverflowX != "clip" &&
        bodyComputedOverflowY != "visible" &&
        bodyComputedOverflowY != "clip")
    );
  };

  if (!Element.prototype.scroll) {
    Element.prototype.scroll = function() {
      const argsLength = arguments.length;
      const doc = this.ownerDocument;
      const win = doc.defaultView;
      const quirksMode = doc.compatMode == "BackCompat";
      const body = document.getElementsByTagName("BODY")[0];
      const options = {};
      let x;
      let y;

      if (doc != window.document) return;
      if (!win) return;

      if (argsLength === 0) {
        return;
      }
      if (argsLength === 1) {
        const arg = arguments[0];
        if (typeof arg !== "object")
          throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";

        if ("left" in arg) {
          options.left = normalizeNonFiniteValue(arg.left);
        }

        if ("top" in arg) {
          options.top = normalizeNonFiniteValue(arg.top);
        }

        x = "left" in options ? options.left : this.scrollLeft;
        y = "top" in options ? options.top : this.scrollTop;
      } else {
        options.left = x = normalizeNonFiniteValue(arguments[0]);
        options.top = y = normalizeNonFiniteValue(arguments[1]);
      }

      if (this == document.documentElement) {
        if (quirksMode) return;

        win.scroll("scrollX" in win ? win.scrollX : "pageXOffset" in win ? win.pageXOffset : this.scrollLeft, y);
        return;
      }

      if (this == body && quirksMode && !isBodyPotentiallyScrollable(body)) {
        win.scroll(options.left, options.top);
        return;
      }

      this.scrollLeft = x;
      this.scrollTop = y;
    };
  }

  if (!Element.prototype.scrollTo) {
    Element.prototype.scrollTo = Element.prototype.scroll;
  }
})();
