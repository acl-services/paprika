import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as sc from "./Pill.styles";

const propTypes = {
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Pill(props) {
  const { children, onRemove } = props;
  const refPill = React.useRef(null);
  const [sizePill, setSizePill] = React.useState(null);
  React.useEffect(() => {
    const rect = refPill.current.getBoundingClientRect();
    setSizePill(rect.height);
  }, []);

  return (
    <sc.Pill ref={refPill}>
      <sc.Content>{children}</sc.Content>
      {sizePill ? (
        <sc.Delete size={sizePill} data-pka-anchor="listbox-tags-pill-delete" onClick={onRemove}>
          <Close />
        </sc.Delete>
      ) : null}
    </sc.Pill>
  );
}

Pill.propTypes = propTypes;
