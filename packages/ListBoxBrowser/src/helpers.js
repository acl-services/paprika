const hasOptions = options => typeof options !== "undefined" && Array.isArray(options);

export function getData({ data, path = "root", selectedOptions }) {
  return data.map(({ label = null, options, defaultIsSelected = false, ...moreAttributes }, index) => {
    if (!label) {
      throw new Error("A Label attribute is required for each option object, can't process data.");
    }

    let newPath = path === "root" ? `${index}` : `${path}/${index}`;
    const _hasOptions = hasOptions(options);
    const option = {
      parent: path,
      hasOptions: _hasOptions,
      $$key: newPath,
      attributes: {
        defaultIsSelected,
        label,
        options: _hasOptions ? getData({ data: options, selectedOptions, path: newPath }) : null,
        ...moreAttributes,
      },
    };

    if (defaultIsSelected) {
      /* eslint-disable no-param-reassign */
      if (option.parent === "root") {
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
  while (key !== "root") {
    if (activeOption.parent !== "root") {
      const parent = getOptionByKey(data, activeOption.parent);
      breadcrumb.push(parent);
      activeOption = parent;
    }
    key = activeOption.parent;
  }

  return breadcrumb.reverse();
}
