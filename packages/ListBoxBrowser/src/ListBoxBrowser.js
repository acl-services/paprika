import React from "react";
import PropTypes from "prop-types";
import { container, flex } from "./ListBoxBrowser.styles";
import { getData, getOptionByKey } from "./helpers";
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
};

const defaultProps = {
  isMulti: true,
  height: 220,
  onChange: () => {},
  isParentSelectable: null,
  rootTitle: "",
  browserTitle: "",
};

function getOptions(indexes, list) {
  if (Array.isArray(indexes)) {
    return indexes.map(index => {
      return list[index].value;
    });
  }

  return [list[indexes].value];
}

function isSelectable({ hasOptions, isParentSelectable }) {
  if (isParentSelectable !== null) {
    return !isParentSelectable;
  }

  return hasOptions;
}

function focusListBoxBrowser() {
  window.requestAnimationFrame(() => {
    document.querySelectorAll('[data-ppk-anchor="listbox-content-inline"]')[1].focus();
  });
}

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const { onChange, isParentSelectable, data, isMulti, height, rootTitle, browserTitle } = props;
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
    if (source === "root") {
      const options = getOptions(indexes, list)
        .map(option => {
          if (isSelectable({ hasOptions: option.hasOptions, isParentSelectable })) {
            return null;
          }

          return option;
        })
        .filter(chunk => chunk);

      if (options.length) {
        setSelectedOptions(selectedOptions => {
          return { ...selectedOptions, root: [...options] };
        });
        return;
      }

      setSelectedOptions(selectedOptions => {
        return { ...selectedOptions, root: [] };
      });
    }

    setSelectedOptions(selectedOptions => {
      return { ...selectedOptions, [browserKey]: getOptions(indexes, list) };
    });
  };

  const handleClickRoot = ({ $$key, hasOptions, isClickFromButton = false }) => event => {
    if ((hasOptions && isParentSelectable === null) || isClickFromButton) {
      setRootKey($$key);
      setBrowserKey($$key);
      focusListBoxBrowser();
      if (event) event.stopPropagation();
    }
  };

  const handleClickBrowser = ({ $$key, isClickFromButton = false }) => event => {
    const option = getOptionByKey(localData, $$key);
    if ((option.hasOptions && isParentSelectable === null) || isClickFromButton) {
      setBrowserKey($$key);
      focusListBoxBrowser();
      if (event) event.stopPropagation();
    }
  };

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

  return (
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
          height={height}
          isMulti={isMulti}
          onChange={handleChange("root")}
          onClickNavigate={handleClickRoot}
          options={localData}
          rootKey={rootKey}
          selectedOptions={selectedOptions}
          isParentSelectable={isParentSelectable}
        />
        <CustomListBox
          browserKey={browserKey}
          hasOnUp={browserOptions.parent !== "root"}
          height={height}
          id={browserKey}
          isMulti={isMulti}
          onChange={handleChange("browser")}
          onClickNavigate={handleClickBrowser}
          onUp={handleUp(browserOptions.parent)}
          options={browserOptions.attributes.options}
          selectedOptions={selectedOptions}
          isParentSelectable={isParentSelectable}
        />
      </div>
      <OptionsSelected options={selectedOptions} />
    </div>
  );
}

ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
