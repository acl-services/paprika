import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import ListBox from "../..";

import { filter } from "../../helpers/filter";
import * as sc from "./WithTags.styles";

const propTypes = {
  children: PropTypes.instanceOf(ListBox.Option).isRequired,
  filter: PropTypes.func,
  noResultsMessage: PropTypes.node,
  onChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const defaultProps = {
  filter: PropTypes.func,
  onChange: PropTypes.func,
  noResultsMessage: "No user were found ***(Replace with I18n)***",
};

const renderTrigger = ({ size /* t, selectedOptions, onRemove, renderPill */ }) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types } = attributes;

  function handleClick(event) {
    event.stopPropagation();

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  return (
    <sc.Trigger ref={refTrigger} {...propsForTrigger()} onClick={handleClick} size={size}>
      <input type="text" />
    </sc.Trigger>
  );
};

export default function WithSearch(props) {
  const { children, filter, noResultsMessage, onChange, data, ...moreProps } = props;
  const { t } = useI18n();

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  function handleChange(...args) {
    onChange(...args);
  }

  return (
    <div ref={refDivRoot}>
      <ListBox isMulti size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Trigger>{renderTrigger({ size, data, t })}</ListBox.Trigger>
        {React.Children.count(children) > 0 ? children : <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>}
      </ListBox>
    </div>
  );
}

WithSearch.propTypes = propTypes;
WithSearch.defaultProps = defaultProps;
WithSearch.Option = ListBox.Option;
WithSearch.filter = filter;
