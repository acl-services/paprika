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
};

const defaultProps = {
  isMulti: true,
  height: 220,
  onChange: () => {},
};

function getOptions(indexes, list) {
  if (Array.isArray(indexes)) {
    return indexes.map(index => {
      return list[index].value;
    });
  }

  return [list[indexes].value];
}

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const [localData] = React.useState(() => getData({ data: props.data, selectedOptions: refSelectedOptions }));
  const [rootKey, setRootKey] = React.useState("0");
  // NOTE: will yield a bug if the first option has not children
  const [browserKey, setBrowserKey] = React.useState("0");
  const [selectedOptions, setSelectedOptions] = React.useState(refSelectedOptions.current);
  const { onChange } = props;
  const browserOptions = React.useMemo(() => getOptionByKey(localData, browserKey || rootKey), [
    browserKey,
    localData,
    rootKey,
  ]);

  const handleChange = source => (indexes, list) => {
    if (source === "root") {
      const options = getOptions(indexes, list)
        .map(option => {
          if (option.hasOptions) {
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

  const handleClickRoot = ($$key, hasOptions) => () => {
    if (hasOptions) {
      setRootKey($$key);
      setBrowserKey($$key);
    }
  };

  const handleClickBrowser = $$key => () => {
    const option = getOptionByKey(localData, $$key);
    if (option.hasOptions) {
      setBrowserKey($$key);
    }
  };

  const handleUp = _parent => () => {
    setBrowserKey(`${_parent}`);
  };

  React.useEffect(() => {
    onChange(selectedOptions);
  }, [onChange, selectedOptions]);

  return (
    <div css={container} height={props.height}>
      <div css={flex}>
        <div css={title}>title 1</div>
        <div css={title}>title 2</div>
      </div>
      <div css={flex}>
        <CustomListBox
          options={localData}
          height={props.height}
          isMulti={props.isMulti}
          onChange={handleChange("root")}
          selectedOptions={selectedOptions}
          onClickNavigate={handleClickRoot}
          rootKey={rootKey}
        />
        <CustomListBox
          options={browserOptions.attributes.options}
          id={browserKey}
          height={props.height}
          isMulti={props.isMulti}
          onChange={handleChange("browser")}
          hasOnUp={browserOptions.parent !== "root"}
          onUp={handleUp(browserOptions.parent)}
          selectedOptions={selectedOptions}
          onClickNavigate={handleClickBrowser}
        />
      </div>
      <OptionsSelected options={selectedOptions} />
    </div>
  );
}

ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
