import React from "react";

/** helpers */
const hasOptions = options => typeof options !== "undefined" && Array.isArray(options);

export function isRoot(key) {
  if (key === null) return false;

  return key.includes("root");
}

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

/** DATA STRUCTURE */

export function getData({ data, path = "root", selectedOptions, defaultSelectedOptions }) {
  return data.map(({ label = null, options, ...moreAttributes }, index) => {
    if (!label) {
      throw new Error("A Label attribute is required for each option object, can't process data.");
    }

    let newPath = isRoot(path) ? `${index}` : `${path}/${index}`;
    const recursiveParameters = { data: options, selectedOptions, path: newPath, defaultSelectedOptions };
    const _hasOptions = hasOptions(options);
    const option = {
      parent: path,
      hasOptions: _hasOptions,
      $$key: newPath,
      attributes: {
        label,
        options: _hasOptions ? getData(recursiveParameters) : null,
        ...moreAttributes,
      },
    };

    if (defaultSelectedOptions(option.attributes)) {
      /* eslint-disable no-param-reassign */
      if (isRoot(option.parent)) {
        newPath = "root";
      }

      if (option.parent in selectedOptions.current) {
        selectedOptions.current = {
          ...selectedOptions.current,
          [option.parent]: [...selectedOptions.current[option.parent], option],
        };
      } else {
        selectedOptions.current = { ...selectedOptions.current, [option.parent]: [option] };
      }
      /* eslint-enable no-param-reassing */
    }

    return option;
  });
}

export function getOptionByKey(data, path) {
  let node = null;
  function runner(data, path) {
    return data.map(option => {
      if (!option.$$key.includes("/") && (typeof data[path] !== "undefined" && option.$$key === path)) {
        node = option;
        throw new Error("option found");
      }

      if (option.$$key === path) {
        node = option;
        throw new Error("option found");
      }

      if (hasOptions(option.attributes.options)) {
        return runner(option.attributes.options, path);
      }

      return [];
    });
  }

  try {
    runner(data, path);
    return [];
  } catch (e) {
    return node;
  }
}

export function getBreadcrumb({ data, option }) {
  let activeOption = option;
  let key = null;
  const breadcrumb = [];
  while (!isRoot(key)) {
    if (!isRoot(activeOption.parent)) {
      const parent = getOptionByKey(data, activeOption.parent);
      breadcrumb.push(parent);
      activeOption = parent;
    }
    key = activeOption.parent;
  }

  return breadcrumb.reverse();
}

export function onChange({ source, indexes, list, isParentSelectable, setSelectedOptions, browserKey, isMulti }) {
  if (!isMulti) {
    setSelectedOptions(selectedOptions => {
      const key = isRoot(source) ? "root" : browserKey;
      if (Object.keys(selectedOptions).length) {
        const option = getOptions(indexes, list)[0];
        const isSameOption = Object.keys(selectedOptions).some(key => {
          return selectedOptions[key][0].$$key === option.$$key;
        });

        if (isSameOption) {
          return {};
        }
      }

      return { [key]: getOptions(indexes, list) };
    });

    return;
  }

  if (isRoot(source)) {
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
}

export function focusListBoxBrowser() {
  window.requestAnimationFrame(() => {
    document.querySelectorAll('[data-ppk-anchor="listbox-content-inline"]')[1].focus();
  });
}

export function focusListBoxRoot() {
  window.requestAnimationFrame(() => {
    document.querySelectorAll('[data-ppk-anchor="listbox-content-inline"]')[0].focus();
  });
}

export function getFirstOptionWithOptions(localData) {
  let index = null;
  try {
    Object.keys(localData).some(key => {
      if (
        localData[key].hasOptions ||
        (localData[key].attributes.options && localData[key].attributes.options.length === 0)
      ) {
        index = key;
        throw new Error("index found");
      }
      return false;
    });

    return index;
  } catch (e) {
    return index;
  }
}

export function extractedExtendedProps(children) {
  const props = {};
  React.Children.map(children, child => {
    if (child.type.displayName === "ListBoxBrowser.Root") {
      props.root = { ...child.props };
    }

    if (child.type.displayName === "ListBoxBrowser.Browser") {
      props.browser = { ...child.props };
    }
  });

  return { ...props, children };
}

export function getDataOptionByFn(data, fn) {
  let node = null;
  function runner(data, fn) {
    return data.map(option => {
      if (fn(option)) {
        node = option;
        throw new Error("option found");
      }

      if (hasOptions(option.options)) {
        return runner(option.options, fn);
      }

      return [];
    });
  }

  try {
    runner(data, fn);
    return node;
  } catch (e) {
    return node;
  }
}
