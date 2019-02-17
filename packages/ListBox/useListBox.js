import React, { useState, useEffect, useMemo } from "react";
import uuidv4 from "uuid/v4";

function createOption({ index, child, title = null }) {
  const { children, idPrefix, label, value } = child.props;

  return {
    content: child.props.children,
    groupTitle: title,
    hasLabel: label,
    id: `${idPrefix}__${uuidv4()}`,
    index,
    isHidden: child.props.isHidden,
    label: label || child.props.children,
    value: value || children,
  };
}

function getOptions(children) {
  const options = {};
  let index = 0;

  React.Children.toArray(children).forEach(child => {
    if (child.type.componentType === "ListBox.Group") {
      const title = child.props.title;
      React.Children.toArray(child.props.children).forEach(_child => {
        options[index] = createOption({ index, child: _child, title });
        index += 1;
      });
    } else {
      options[index] = createOption({ index, child });
      index += 1;
    }
  });

  // TODO: Work on the blank/empty option
  // options[0] = {
  //   id: `$empty__${uuidv4()}`,
  //   index: 0,
  //   hasLabel: true,
  //   label: <span>&nbsp;</span>,
  //   content: <span>&nbsp;</span>,
  //   value: '',
  // }

  return options;
}

function getGroups(children) {
  const groups = [];
  React.Children.toArray(children).forEach(child => {
    if (child.type.componentType === "ListBox.Group") {
      groups.push(child.props.title);
    }
  });
  return groups;
}

export default function useListBox({
  $refListBoxTrigger,
  $refListBoxTriggerContainer,
  $refListBoxContainer,
  $refListBoxFilterInput,
  $refListBox,
  hasFilter,
  isMulti,
  listBoxOptions,
  placeholder,
  isPopoverOpen,
}) {
  const memoizedOptions = useMemo(() => getOptions(listBoxOptions, [listBoxOptions]));

  const memoizedGroups = useMemo(() => getGroups(listBoxOptions, [listBoxOptions]));

  /**
    state description:
    @activeOption     points to the options which have the "focus"
    @filteredOptions  an array containing the options that have been hidden by filtering
                      or selection process
    @hasPopupOpened   is displaying the options popup or not
    @isMulti          Describe if the Listbox accepts or not multiple selection
    @selectedOptions  User selected options via mouse click or keyboard interaction
    @hasNoResults     Will be set to true when the filter dont find results See: Filter.js
  */
  const [state, set] = useState({
    activeOption: 0,
    hasFilter,
    hasNoResults: false,
    hasPopupOpened: false,
    filteredOptions: [],
    isMulti,
    options: memoizedOptions,
    groups: memoizedGroups,
    selectedOptions: [],
    triggerWidth: 0,
    isPopoverOpen,
  });

  const optionsKeys = Object.keys(state.options);

  function getDOMAttributesForListBoxContainer() {
    return { tabIndex: "-1" };
  }

  function getDOMAttributesForListBox() {
    return {
      "aria-activedescendant": state.options[state.activeOption].id,
      "aria-labelledby": "listbox-value",
      id: "popup-picker",
      role: "listbox",
    };
  }

  const getDOMAttributesForListBoxOption = index => () => {
    return index === state.activeOption
      ? {
          "aria-selected": "true",
        }
      : "";
  };

  function getDOMAttributesForListBoxButton() {
    return {
      "aria-haspopup": "popup-picker",
      "aria-labelledby": "ccc listBox-button",
      id: "listBox-button",
      type: "button",
    };
  }

  function getListboxLabelForMulti() {
    const optionsLength = state.selectedOptions.length;
    if (state.options[state.activeOption].hasLabel) {
      const label = state.selectedOptions.map(item => ` ${state.options[item].label}`);

      const quantity = optionsLength > 1 ? `(${optionsLength})` : "";
      return `${quantity} ${label}`;
    }
    const label = state.selectedOptions.map(item => state.options[item].label);

    return optionsLength > 1 ? (
      <React.Fragment>
        <span>({optionsLength})</span>
        {label}
      </React.Fragment>
    ) : (
      <React.Fragment>{label}</React.Fragment>
    );
  }

  function getListboxLabel() {
    if (state.options[state.activeOption].value === "") {
      return placeholder;
    }

    if (!state.selectedOptions.length) {
      return placeholder;
    }

    if (isMulti) {
      return getListboxLabelForMulti();
    }

    return state.options[state.activeOption].label;
  }

  function close() {
    set({
      ...state,
      filteredOptions: [],
      isPopoverOpen: false,
    });
  }

  function setActiveOption(nextActiveIndex) {
    set({ ...state, activeOption: nextActiveIndex });
  }

  function setSingleSelectOption(nextSelectedIndex, isPopoverOpen = true) {
    set(_state => ({
      ..._state,
      activeOption: nextSelectedIndex,
      selectedOptions: [nextSelectedIndex],
      isPopoverOpen,
    }));
  }

  function setMultipleSelectOptions(nextSelectedIndex) {
    set(_state => {
      const selectedOptionsArray = _state.selectedOptions.slice();

      if (selectedOptionsArray.includes(nextSelectedIndex)) {
        const index = selectedOptionsArray.indexOf(nextSelectedIndex);
        selectedOptionsArray.splice(index, 1);
      } else {
        selectedOptionsArray.push(nextSelectedIndex);
      }

      return {
        ..._state,
        isPopoverOpen: true,
        activeOption: nextSelectedIndex,
        selectedOptions: selectedOptionsArray,
      };
    });
  }

  const handleClickListBoxOption = index => () => {
    if (isMulti) {
      setMultipleSelectOptions(index);
      return;
    }

    setSingleSelectOption(index, false);
  };

  const handleClickListBoxButton = () => {
    set(_state => ({ ..._state, isPopoverOpen: !_state.isPopoverOpen }));
  };

  const handleClickListBoxIsMultiAccept = () => {
    close();
  };

  const handleClickListBoxIsMultiCancel = event => {
    event.stopPropagation();
    close();
  };

  const isOptionVisible = key => () => {
    const keyInt = Number.parseInt(key, 10);
    if (state.hasNoResults) {
      return false;
    }

    if (state.options[keyInt].isHidden) {
      return false;
    }

    return !state.filteredOptions.length || state.filteredOptions.includes(keyInt);
  };

  function getIndexPosition(ascending = true) {
    if (state.hasNoResults) {
      return null;
    }

    const { activeOption, filteredOptions, options } = state;
    let index = null;

    let keepIterating = true;
    let i = activeOption;

    while (keepIterating) {
      if (ascending) {
        if (filteredOptions.length === 1) {
          keepIterating = false;
          return filteredOptions[0];
        }

        if ((filteredOptions.length && i + 1 > options.length) || i + 1 > optionsKeys.length - 1) {
          keepIterating = false;
          return null;
        }

        i++;
      } else {
        if ((filteredOptions.length && i - 1 < 0) || i - 1 < 0) {
          keepIterating = false;
          return null;
        }

        i--;
      }

      if (isOptionVisible(i)()) {
        index = i;
        keepIterating = false;
      }
    }

    return index || 0;
  }

  function getPreviousOption() {
    return getIndexPosition(false);
  }

  function getNextOption() {
    return getIndexPosition();
  }

  const handleArrowKeyUp = event => {
    event.preventDefault();
    const previous = getPreviousOption();
    if (previous !== null) {
      if (isMulti) {
        setActiveOption(previous);
        return;
      }

      setSingleSelectOption(previous);
    }
  };

  const handleArrowKeyDown = event => {
    event.preventDefault();
    const next = getNextOption();
    if (next !== null) {
      if (isMulti) {
        setActiveOption(next);
        return;
      }

      setSingleSelectOption(next);
    }
  };

  const handleKeyDownListBoxContainer = event => {
    switch (event.key) {
      case "ArrowUp":
        handleArrowKeyUp(event);
        break;

      case "ArrowDown":
        handleArrowKeyDown(event);
        break;

      case "Escape":
        if (state.isPopoverOpen) {
          close();
        }
        break;

      case "Enter":
        // NOTE: adding space increase complexity when the multiselect
        // includes search input or input checkbox which is control with
        // the space bar
        // case ' ':
        if (state.isPopoverOpen) {
          if (isMulti) {
            setMultipleSelectOptions(state.activeOption);
          } else {
            close();
          }
        }
        break;

      default:
        break;
    }
  };

  const handleBlur = () => {
    // requestAnimationFrame give time to process
    // the element that has received the click event
    // via document.activeElement instead of returning
    // the body element automatically
    window.requestAnimationFrame(() => {
      if (
        $refListBoxContainer &&
        $refListBoxContainer.current &&
        !$refListBoxContainer.current.contains(document.activeElement)
      ) {
        close();
      }
    });
  };

  const isOptionSelected = index => () => state.selectedOptions.includes(index);

  useEffect(() => {
    const filterInput = $refListBoxFilterInput.current;
    const optionsContainer = $refListBoxContainer.current;
    if (state.isPopoverOpen) {
      if (hasFilter) {
        // this is compiting with the focus of the
        // Popover, the popover will try to put the
        // focus on the <Popover.Content> which works
        // ok when you automatically wants to grant
        // focus to whatever content on the popover
        // unsure how to handle this without settimout
        // 200ms seems really stable for stealing the
        // focus to the <Popover.Content />
        setTimeout(() => {
          if (filterInput) {
            filterInput.focus();
          }
        }, 200);
      } else {
        optionsContainer.focus();
      }
      set({ ...state, triggerWidth: $refListBoxTrigger.current.offsetWidth, hasPopupOpened: true });
    } else if (state.hasPopupOpened) {
      $refListBoxTrigger.current.focus();
    }
  }, [state.isPopoverOpen]);

  useEffect(() => {
    set({ ...state, options: memoizedOptions, groups: memoizedGroups });
  }, [listBoxOptions]);

  useEffect(() => {
    if (state.isPopoverOpen && state.options[state.activeOption]) {
      const parentOffsetTop = $refListBox.current.offsetTop;
      const $option = document.getElementById(state.options[state.activeOption].id);
      if ($option) {
        const optionOffsetTop = $option.offsetTop;
        let offsetTop = optionOffsetTop - parentOffsetTop;
        if (state.activeOption === 0) {
          offsetTop = 0;
        }
        $refListBox.current.scrollTo(0, offsetTop - 12);
      }
    }
  }, [state.activeOption]);

  useEffect(() => {
    const $triggerRef = $refListBoxTriggerContainer.current;

    if ($refListBoxTriggerContainer.current) {
      set({
        ...state,
        triggerWidth: $triggerRef.offsetWidth,
      });
    }

    const handleResize = () => {
      set(_state => {
        return { ..._state, triggerWidth: $triggerRef.offsetWidth };
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [$refListBoxTriggerContainer.current]);

  return {
    getDOMAttributesForListBox,
    getDOMAttributesForListBoxButton,
    getDOMAttributesForListBoxContainer,
    getDOMAttributesForListBoxOption,
    getListboxLabel,
    handleBlur,
    handleClickListBoxButton,
    handleClickListBoxIsMultiAccept,
    handleClickListBoxIsMultiCancel,
    handleClickListBoxOption,
    handleKeyDownListBoxContainer,
    isOptionSelected,
    isOptionVisible,
    set,
    state,
  };
}
