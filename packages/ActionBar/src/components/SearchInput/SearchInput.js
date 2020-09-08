import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import Input from "@paprika/input";
import SearchIcon from "@paprika/icon/lib/Search";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./SearchInput.styles";

export default function SearchInput(props) {
  const { a11yText, onChange, placeholder, ...moreProps } = props;
  const I18n = useI18n();
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedOnChange = React.useCallback(debounce(onChange, 500), []);

  function handleSearch(e) {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (onChange) {
      debouncedOnChange(newSearchTerm);
    }
  }

  return (
    <sc.Input
      a11yText={a11yText || I18n.t("actionBar.search_a11y_text")}
      icon={<SearchIcon />}
      onChange={handleSearch}
      placeholder={placeholder || I18n.t("actionBar.search_placeholder")}
      type={Input.types.type.SEARCH}
      value={searchTerm}
      {...moreProps}
    />
  );
}

const propTypes = {
  a11yText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  a11yText: null,
  placeholder: null,
  onChange: null,
};

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
SearchInput.displayName = "ActionBar.SearchInput";
