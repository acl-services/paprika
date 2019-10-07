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
} from "./helpers";
import OptionsSelected from "./components/OptionsSelected";
import CustomListBox from "./components/CustomListBox";
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
};

const defaultProps = {
  isMulti: true,
  height: 220,
  onChange: () => {},
  isParentSelectable: null,
  rootTitle: "",
  browserTitle: "",
  children: null,
};

export const ListBoxBrowserContext = React.createContext({});

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const { onChange, isParentSelectable, data, isMulti, height, rootTitle, browserTitle, children } = props;
  const [localData] = React.useState(() => getData({ data, selectedOptions: refSelectedOptions }));
  const [rootKey, setRootKey] = React.useState("0");
  // NOTE: will yield a bug if the first option has not children
  const [browserKey, setBrowserKey] = React.useState("0");
  const [selectedOptions, setSelectedOptions] = React.useState(refSelectedOptions.current);

  const browserOptions = React.useMemo(() => getOptionByKey(localData, browserKey || rootKey), [
    browserKey,
    localData,
    rootKey,
  ]);

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

  const value = React.useMemo(() => {
    return {
      onChange,
      isParentSelectable,
      isMulti,
      height,
      rootTitle,
      browserTitle,
      localData,
      rootKey,
      browserKey,
      selectedOptions,
      browserOptions,
      onRemove,
      onJumpToOption,
    };
  }, [
    onChange,
    isParentSelectable,
    isMulti,
    height,
    rootTitle,
    browserTitle,
    localData,
    rootKey,
    browserKey,
    selectedOptions,
    browserOptions,
    onRemove,
    onJumpToOption,
  ]);

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
          />
          <CustomListBox
            id={browserKey}
            browserKey={browserKey}
            hasOnUp={!isRoot(browserOptions.parent)}
            onChange={handleChange("browser")}
            onClickNavigate={handleClickBrowser}
            onUp={handleUp(browserOptions.parent)}
            options={browserOptions.attributes.options}
          />
        </div>
        {children}
      </div>
    </ListBoxBrowserContext.Provider>
  );
}

ListBoxBrowser.OptionsSelected = OptionsSelected;
ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
