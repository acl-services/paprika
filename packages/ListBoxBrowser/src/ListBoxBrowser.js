import React from "react";
import PropTypes from "prop-types";
import { container, flex } from "./ListBoxBrowser.styles";
import {
  getData,
  getOptionByKey,
  onChange as onChangeHelper,
  isRoot,
  focusListBoxBrowser,
  focusListBoxRoot,
  getFirstOptionWithOptions,
  extractedExtendedProps,
  getDataOptionByFn,
} from "./helpers";
import OptionsSelected from "./components/OptionsSelected";
import CustomListBox from "./components/CustomListBox";
import Root from "./components/Root";
import Browser from "./components/Browser";
import Title from "./components/Title";

const propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
  isMulti: PropTypes.bool,
  height: PropTypes.number,
  onChange: PropTypes.func,
  isParentSelectable: PropTypes.bool,
  rootTitle: PropTypes.string,
  browserTitle: PropTypes.string,
  children: PropTypes.node,
  hasBreadcrumb: PropTypes.bool,
  onFetch: PropTypes.func,
  defaultSelectedOptions: PropTypes.func,
};

const defaultProps = {
  isMulti: true,
  height: 220,
  onChange: () => {},
  isParentSelectable: null,
  rootTitle: "",
  browserTitle: "",
  children: null,
  hasBreadcrumb: true,
  onFetch: null,
  defaultSelectedOptions: () => {
    return false;
  },
};

export const ListBoxBrowserContext = React.createContext({});

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const {
    browserTitle,
    children: childrenProps,
    data,
    hasBreadcrumb,
    height,
    isMulti,
    isParentSelectable,
    onChange,
    rootTitle,
    onFetch,
    defaultSelectedOptions,
  } = props;

  const { root, browser, children } = extractedExtendedProps(childrenProps);
  const localData = React.useMemo(
    () => getData({ data, selectedOptions: refSelectedOptions, defaultSelectedOptions }),
    [data, defaultSelectedOptions]
  );
  const index = getFirstOptionWithOptions(localData);

  const [rootKey, setRootKey] = React.useState(index);
  const [browserKey, setBrowserKey] = React.useState(index);
  const [selectedOptions, setSelectedOptions] = React.useState(refSelectedOptions.current);
  const browserOptions = React.useMemo(() => getOptionByKey(localData, browserKey), [browserKey, localData]);

  const handleChange = source => (indexes, list) => {
    onChangeHelper({
      source,
      indexes,
      list,
      isParentSelectable,
      setSelectedOptions,
      browserKey,
      isMulti,
    });
  };

  const fetch = React.useCallback(
    function fetchCallback($$key) {
      const option = getOptionByKey(localData, $$key);
      const { attributes } = option;
      if (attributes.options.length === 0) {
        if (onFetch) onFetch(attributes);
      }
    },
    [localData, onFetch]
  );

  const handleClickRoot = React.useCallback(
    ({ $$key, hasOptions, isClickFromButton = false }) => event => {
      if ((hasOptions && isParentSelectable === null) || isClickFromButton) {
        setRootKey($$key);
        setBrowserKey($$key);
        focusListBoxBrowser();
        if (event) event.stopPropagation();
      }
    },
    [isParentSelectable]
  );

  const handleClickBrowser = React.useCallback(
    ({ $$key, isClickFromButton = false }) => event => {
      const option = getOptionByKey(localData, $$key);
      if ((option.hasOptions && isParentSelectable === null) || isClickFromButton) {
        setBrowserKey($$key);
        focusListBoxBrowser();
        if (event) event.stopPropagation();
      }
    },
    [isParentSelectable, localData]
  );

  const handleUp = _parent => () => {
    setBrowserKey(`${_parent}`);
    focusListBoxBrowser();
  };

  function handleClickBreadcrumb(option) {
    setBrowserKey(`${option.$$key}`);
    focusListBoxBrowser();
  }

  const onJumpToOption = React.useCallback(
    function handleClickJumpToOption(option) {
      if (option.hasOptions) {
        const attributes = { $$key: option.$$key, hasOptions: true, isClickFromButton: true };
        if (isRoot(option.$$key)) {
          handleClickRoot(...attributes)();
          return;
        }
        handleClickBrowser({ ...attributes })();
        return;
      }

      if (isRoot(option.parent)) {
        focusListBoxRoot();
        return;
      }
      handleClickBrowser({ $$key: option.parent, hasOptions: false, isClickFromButton: true })();
    },
    [handleClickBrowser, handleClickRoot]
  );

  const onRemove = React.useCallback(function handleRemove(option) {
    setSelectedOptions(selectedOptions => {
      console.log(option);
      const cloneSelectedOptions = { ...selectedOptions };
      let index = null;
      cloneSelectedOptions[option.parent].some((opt, i) => {
        if (opt.$$key === option.$$key) {
          index = i;
          return true;
        }
        return false;
      });

      cloneSelectedOptions[option.parent].splice(index, 1);
      return cloneSelectedOptions;
    });
  }, []);

  React.useEffect(() => {
    onChange(selectedOptions);
  }, [onChange, selectedOptions]);

  React.useEffect(() => {
    if (rootKey !== null) fetch(rootKey);
  }, [fetch, rootKey]);

  React.useEffect(() => {
    if (browserKey !== null) fetch(browserKey);
  }, [fetch, browserKey]);

  const value = React.useMemo(() => {
    return {
      browserKey,
      browserOptions,
      browserTitle,
      hasBreadcrumb,
      height,
      isMulti,
      isParentSelectable,
      localData,
      onChange,
      onJumpToOption,
      onRemove,
      rootKey,
      rootTitle,
      selectedOptions,
    };
  }, [
    browserKey,
    browserOptions,
    browserTitle,
    hasBreadcrumb,
    height,
    isMulti,
    isParentSelectable,
    localData,
    onChange,
    onJumpToOption,
    onRemove,
    rootKey,
    rootTitle,
    selectedOptions,
  ]);

  if (!rootKey && !browserKey) {
    throw new Error("At least one option should have options attribute");
  }

  return (
    <ListBoxBrowserContext.Provider value={value}>
      <div isParentSelectable={isParentSelectable} css={container} height={height}>
        <Title
          rootTitle={rootTitle}
          browserTitle={browserTitle}
          onClickBreadcrumb={handleClickBreadcrumb}
          browserKey={browserKey}
          data={localData}
        />
        <div css={flex}>
          <CustomListBox
            browserKey="root"
            onChange={handleChange("root")}
            onClickNavigate={handleClickRoot}
            options={localData}
            isLoading={(root && root.isLoading) || false}
          />
          <CustomListBox
            id={browserKey}
            browserKey={browserKey}
            hasOnUp={!isRoot(browserOptions.parent)}
            onChange={handleChange("browser")}
            onClickNavigate={handleClickBrowser}
            onUp={handleUp(browserOptions.parent)}
            options={browserOptions.attributes.options}
            isLoading={(browser && browser.isLoading) || false}
          />
        </div>
        {children}
      </div>
    </ListBoxBrowserContext.Provider>
  );
}

ListBoxBrowser.OptionsSelected = OptionsSelected;
ListBoxBrowser.Browser = Browser;
ListBoxBrowser.Root = Root;
ListBoxBrowser.findOption = getDataOptionByFn;

ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
