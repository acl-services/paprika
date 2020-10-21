import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import useI18n from "@paprika/l10n/lib/useI18n";
import Pill, { Pills } from "./components/Pill";
import * as sc from "./ListBoxTags.styles";

const propTypes = {
  children: PropTypes.isRequired,
  onCustomOption: PropTypes.func,
};

const defaultProps = {
  onCustomOption: () => {},
};

const renderTrigger = ({ size, refListBox }) => (...args) => {
  const [selected, options, , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp } = attributes;
  const { t } = useI18n();

  function handleClick(event) {
    if (event.target.dataset.dataPkaAnchor === "listbox-tags-pill-delete") {
      return;
    }

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleDelete = option => () => {
    refListBox.current.toggleSelectedOption(option.index);
  };

  return (
    <sc.Trigger
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      size={size}
    >
      <Pills>
        {selected.map(index => {
          return <Pill onDelete={handleDelete(options[index])}>{options[index].label}</Pill>;
        })}
        {selected.length ? null : <div>{t("listBoxTags.placeholder")}</div>}
      </Pills>
    </sc.Trigger>
  );
};

export default function ListBoxTags(props) {
  const {
    children,
    onCustomOption,
    size = ListBox.types.size.MEDIUM, // eslint-disable-line
    ...moreProps
  } = props;

  const refListBox = React.useRef(null);
  const refFilter = React.useRef(null);

  function handleKeyDown(event) {
    const label = event.target.value;
    const regexEmail = /^.+@.+\..+$/;
    if (event.key === "Enter" && regexEmail.test(label)) {
      console.log("email: ", event.target.value);
      refFilter.current.clear();
      refListBox.current.close();
      onCustomOption(label);
    }
  }

  return (
    <ListBox ref={refListBox} isMulti size={size} {...moreProps}>
      <ListBox.Trigger>{renderTrigger({ size, refListBox })}</ListBox.Trigger>
      <ListBox.Filter ref={refFilter} onKeyDown={handleKeyDown} />
      {children}
    </ListBox>
  );
}

ListBoxTags.propTypes = propTypes;
ListBoxTags.defaultProps = defaultProps;
ListBoxTags.Option = ListBox.Option;
