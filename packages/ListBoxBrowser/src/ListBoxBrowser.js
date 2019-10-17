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
  getInitialView,
  extractedExtendedProps,
  getDataOptionByFn,
} from "./helpers";
import OptionsSelected from "./components/OptionsSelected";
import CustomListBox from "./components/CustomListBox";
import Root from "./components/Root";
import Browser from "./components/Browser";
import Title from "./components/Title";

const propTypes = {
  /**
    An array of javascript objects holding the data structure for the ListBoxBrowser
    The object shape **must have** at least a string **label** property and an optional array **options** property.
    Also can hold any other kind of data for your own use.
    ex.

    [{ label: "One" }, { label: "Two", options: [{ label: "Three" }] }]
  */
  data: PropTypes.any.isRequired, // eslint-disable-line

  /**
    Indicates if the user can select one or multiple options
  */
  isMulti: PropTypes.bool,
  /**
    Set the height for the ListBoxBrowser
  */
  height: PropTypes.number,
  /**
    Callback function receiving an array of selected options by the component
  */
  onChange: PropTypes.func,
  /**
    Allows the user to select the parent options
  */
  isParentSelectable: PropTypes.bool,
  /**
    Content title for the left column
  */
  rootTitle: PropTypes.node,
  /**
    Content title for the right column
  */
  browserTitle: PropTypes.node,
  /**
    You can pass <ListBoxBrowser.OptionSelected /> as a children
  */
  children: PropTypes.node,
  /**
    Indicates if the right column should display a breadcrumb
  */
  hasBreadcrumb: PropTypes.bool,
  /**
    Set a border red color around the component indicating that has an error
  */
  hasError: PropTypes.bool,
  /**
    When declaring the array options empty, this will be execute to retrive the
    data, useful if you want to do a lazy load.

    ex.
    <ListBoxBrowser data={[{ label: "lazy", options: [] }]} onFetch={(option) => {** logic**}}>
      <ListBoxBrowser.Browser isLoading={isBrowserLoading} />
    </ListBoxBrowser>
  */
  onFetch: PropTypes.func,
  /**
    A function that set an option selected returning true or false
    you can use to compare your data structure and decide if the option is
    initially selected or not.

    const data = [{ key: 1, label: "one", options: [...] }, { key: 2, label: "two" }, { key: 3, label: "three" }]

    ex.
    <ListBoxBrowser data={data} defaultSelectedOptions={(option) => {
      return option.key === 2 or option.key === 3
    }} />
  */
  defaultSelectedOptions: PropTypes.func,
  /**
    A function that set the intial view for the right columns (Browser) of the ListBoxBrowser
    the option selected to be the initial view should have options to be valid,
    by default the ListBoxBrowser picked the first option which has options to be the
    initial value.
  */
  defaultSelectedView: PropTypes.func,
};

const defaultProps = {
  browserTitle: "",
  children: null,
  hasBreadcrumb: true,
  hasError: false,
  height: 220,
  isMulti: true,
  isParentSelectable: null,
  onChange: () => {},
  onFetch: null,
  rootTitle: "",
  defaultSelectedOptions: () => {
    return false;
  },
  defaultSelectedView: null,
};

export const ListBoxBrowserContext = React.createContext({});

export default function ListBoxBrowser(props) {
  const {
    browserTitle,
    children: childrenProps,
    data,
    defaultSelectedOptions,
    defaultSelectedView,
    hasBreadcrumb,
    hasError,
    height,
    isMulti,
    isParentSelectable,
    onChange,
    onFetch,
    rootTitle,
  } = props;
  const refDefaultSelectedOptions = React.useRef({});
  const refDefaultSelectedView = React.useRef(null);

  const { root, browser, children } = extractedExtendedProps(childrenProps);
  const localData = React.useMemo(
    () =>
      getData({
        data,
        refDefaultSelectedOptions,
        defaultSelectedOptions,
        defaultSelectedView,
        refDefaultSelectedView,
      }),
    [data, defaultSelectedOptions, defaultSelectedView]
  );

  const index = React.useMemo(
    function getIndex() {
      if (refDefaultSelectedView.current) {
        const browser = refDefaultSelectedView.current;
        return { root: browser.split("/")[0], browser };
      }
      const index = getInitialView(localData);
      return { root: index, browser: index };
    },
    [localData]
  );

  const [rootKey, setRootKey] = React.useState(index.root);
  const [browserKey, setBrowserKey] = React.useState(index.browser);
  const [selectedOptions, setSelectedOptions] = React.useState(refDefaultSelectedOptions.current);
  const browserOptions = React.useMemo(() => getOptionByKey(localData, browserKey), [browserKey, localData]);

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

  const handleUp = _parent => () => {
    setBrowserKey(`${_parent}`);
    focusListBoxBrowser();
  };

  function handleClickBreadcrumb(option) {
    setBrowserKey(`${option.$$key}`);
    focusListBoxBrowser();
  }

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
      <div hasError={hasError} isParentSelectable={isParentSelectable} css={container} height={height}>
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
