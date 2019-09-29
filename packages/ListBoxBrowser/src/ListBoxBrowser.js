import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import { container, flex, title } from "./ListBoxBrowser.styles";
import { getData, getOptionByKey } from "./helpers";

const propTypes = {
  data: PropTypes.any.isRequired, // eslint-disable-line
  isMulti: PropTypes.bool,
};

const defaultProps = {
  isMulti: true,
};

export default function ListBoxBrowser(props) {
  const [rootKey, setRootKey] = React.useState("0");
  const [browserKey, setBrowserKey] = React.useState("0");
  const [selectedOptions, setSelectedOptions] = React.useState({});

  console.log("selected options", selectedOptions);

  const localData = React.useMemo(() => getData({ data: props.data }), [props.data]);
  const browserOptions = React.useMemo(() => getOptionByKey(localData, browserKey || rootKey), [
    browserKey,
    localData,
    rootKey,
  ]);

  function getOptions(indexes, list) {
    if (Array.isArray(indexes)) {
      return indexes.map(index => {
        return list[index].value;
      });
    }

    return [list[indexes].value];
  }

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

  return (
    <div css={container}>
      <div css={flex}>
        <div css={title}>title 1</div>
        <div css={title}>title 2</div>
      </div>
      <div css={flex}>
        <ListBox height={240} isInline isMulti={props.isMulti} onChange={handleChange("root")}>
          <ListBox.Trigger isHidden></ListBox.Trigger>
          {localData.map(({ $$key, attributes, hasOptions }) => (
            <ListBox.Option
              onClick={handleClickRoot($$key, hasOptions)}
              isSelected={$$key === rootKey}
              key={$$key}
              label={attributes.label}
              value={{ $$key, attributes, hasOptions }}
            >
              {attributes.label}
              {hasOptions ? " >" : null}
            </ListBox.Option>
          ))}
        </ListBox>
        <ListBox key={browserKey} height={240} isMulti={props.isMulti} isInline onChange={handleChange("browser")}>
          <ListBox.Trigger isHidden></ListBox.Trigger>
          {browserOptions.parent !== "" ? (
            <ListBox.Option onClick={handleUp(browserOptions.parent)}>../</ListBox.Option>
          ) : null}
          {browserOptions.attributes.options.map(({ $$key, attributes, hasOptions }) => (
            <ListBox.Option
              onClick={handleClickBrowser($$key)}
              isSelected={attributes.defaultIsSelected}
              key={$$key}
              label={attributes.label}
              value={{ $$key, attributes, hasOptions }}
            >
              {attributes.label}
              {hasOptions ? " >" : null}
            </ListBox.Option>
          ))}
        </ListBox>
      </div>
    </div>
  );
}

ListBoxBrowser.propTypes = propTypes;
ListBoxBrowser.defaultProps = defaultProps;
