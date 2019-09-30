import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import { container, flex, title } from "./ListBoxBrowser.styles";
import { getData, getOptionByKey } from "./helpers";
import OptionsSelected from "./components/OptionsSelected";

const propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
  isMulti: PropTypes.bool,
  height: PropTypes.number,
};

const defaultProps = {
  isMulti: true,
  height: 220,
};

function getOptions(indexes, list) {
  if (Array.isArray(indexes)) {
    return indexes.map(index => {
      return list[index].value;
    });
  }

  return [list[indexes].value];
}

function isSelected({ $$key, selectedOptions, browserKey }) {
  if (browserKey in selectedOptions) {
    return selectedOptions[browserKey].some(option => option.$$key === $$key);
  }

  return false;
}

export default function ListBoxBrowser(props) {
  const refSelectedOptions = React.useRef({});
  const [localData] = React.useState(() => getData({ data: props.data, selectedOptions: refSelectedOptions }));
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

  console.log("selected options", selectedOptions);

  return (
    <div css={container} height={props.height}>
      <div css={flex}>
        <div css={title}>title 1</div>
        <div css={title}>title 2</div>
      </div>
      <div css={flex}>
        <ListBox height={props.height} isInline isMulti={props.isMulti} onChange={handleChange("root")}>
          <ListBox.Trigger isHidden></ListBox.Trigger>
          {localData.map(({ $$key, attributes, hasOptions }) => (
            <ListBox.Option
              preventDefaultOnSelect={hasOptions}
              isSelected={isSelected({ $$key, browserKey, selectedOptions })}
              key={$$key}
              label={attributes.label}
              onClick={handleClickRoot($$key, hasOptions)}
              value={{ $$key, attributes, hasOptions }}
              data-ppk-is-root-selected={rootKey === $$key}
            >
              {attributes.label}
              {hasOptions ? " >" : null}
            </ListBox.Option>
          ))}
        </ListBox>
        <ListBox
          key={browserKey}
          height={props.height}
          isMulti={props.isMulti}
          isInline
          onChange={handleChange("browser")}
        >
          <ListBox.Trigger isHidden></ListBox.Trigger>
          {browserOptions.parent !== "root" ? (
            <ListBox.Option onClick={handleUp(browserOptions.parent)}>../</ListBox.Option>
          ) : null}
          {browserOptions.attributes.options.map(({ $$key, attributes, hasOptions }) => (
            <ListBox.Option
              preventDefaultOnSelect={hasOptions}
              isSelected={isSelected({ $$key, browserKey, selectedOptions })}
              key={$$key}
              label={attributes.label}
              onClick={handleClickBrowser($$key)}
              value={{ $$key, attributes, hasOptions }}
            >
              {attributes.label}
              {hasOptions ? " >" : null}
            </ListBox.Option>
          ))}
        </ListBox>
      </div>
      <OptionsSelected options={selectedOptions} />
    </div>
  );
}

ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
