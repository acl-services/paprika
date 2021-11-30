import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import Input from "@paprika/input";
import SearchIcon from "@paprika/icon/lib/Search";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./SearchInput.styles";

function useDebouncer(debounceDelay) {
  const [debounceCallback] = React.useState(() => debounce(callbackFn => callbackFn(), debounceDelay));

  return debounceCallback;
}

export default function SearchInput({ a11yText, initialValue, debounceDelay, onChange, placeholder, ...moreProps }) {
  const I18n = useI18n();
  const [searchTerm, setSearchTerm] = React.useState(initialValue);
  const debounceCallback = useDebouncer(debounceDelay);

  function handleSearch(e) {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (onChange) {
      debounceCallback(() => onChange(newSearchTerm));
    }
  }

  return (
    <sc.InputWrapper>
      <Input
        a11yText={a11yText || I18n.t("actionBar.search_a11y_text")}
        icon={<SearchIcon />}
        onChange={handleSearch}
        placeholder={placeholder || I18n.t("actionBar.search_placeholder")}
        type={Input.types.type.SEARCH}
        value={searchTerm}
        {...moreProps}
      />
    </sc.InputWrapper>
  );
}

const propTypes = {
  /** Descriptive a11y text for assistive technologies. */
  a11yText: PropTypes.string,

  /** SearchInput will be initialized with this value on the first render */
  initialValue: PropTypes.string,

  /** Debounce delay (ms) will be used for onChange. */
  debounceDelay: PropTypes.number,

  /** Placeholder for the search input. */
  placeholder: PropTypes.string,

  /** Callback to be executed when the input value is changed. */
  onChange: PropTypes.func,
};

const defaultProps = {
  a11yText: null,
  initialValue: "",
  debounceDelay: 500,
  placeholder: null,
  onChange: null,
};

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
SearchInput.displayName = "ActionBar.SearchInput";
