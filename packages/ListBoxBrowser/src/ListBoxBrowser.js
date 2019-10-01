import React from "react";
import PropTypes from "prop-types";
import { container, flex, title } from "./ListBoxBrowser.styles";
import { getData, getOptionByKey } from "./helpers";
import OptionsSelected from "./components/OptionsSelected";
import CustomListBox from "./components/CustomListBox";

const propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
  isMulti: PropTypes.bool,
  height: PropTypes.number,
  onChange: PropTypes.func,
  isParentSelectable: PropTypes.bool,
};

const defaultProps = {
  isMulti: true,
  height: 220,
  onChange: () => {},
  isParentSelectable: null,
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

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const { onChange, isParentSelectable, data, isMulti, height } = props;
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
      if (event) event.stopPropagation();
    }
  };

  const handleClickBrowser = ({ $$key, isClickFromButton = false }) => event => {
    const option = getOptionByKey(localData, $$key);
    if ((option.hasOptions && isParentSelectable === null) || isClickFromButton) {
      setBrowserKey($$key);
      if (event) event.stopPropagation();
    }
  };

  const handleUp = _parent => () => {
    setBrowserKey(`${_parent}`);
  };

  React.useEffect(() => {
    onChange(selectedOptions);
  }, [onChange, selectedOptions]);

  return (
    <div isParentSelectable={isParentSelectable} css={container} height={height}>
      <div css={flex}>
        <div css={title}>title 1</div>
        <div css={title}>title 2</div>
      </div>
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
