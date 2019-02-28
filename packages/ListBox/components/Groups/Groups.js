import React from "react";
import PropTypes from "prop-types";
import { ListBoxOptionStyled, ListBoxOptionDividerStyled } from "../../ListBox.styles";
import Checker from "../../Checker";
import useStore from "../../store/useStore";

const propTypes = {};
const defaultProps = {};

export default function Groups(props) {
  const [groupsFiltered, setGroupFilter] = React.useState([]);
  // const [state] = useStore();

  const toggleGroupFilterChecked = group => event => {
    event.stopPropagation();

    const isChecked = event.target.checked;
    const groups = groupsFiltered.slice();
    // const optionsKeys = Object.keys(state.options);

    if (isChecked) {
      groups.push(group);

      // const filteredOptions = optionsKeys
      //   .filter(key => groups.includes(state.options[key].groupTitle))
      //   .map(key => Number.parseInt(key, 10));
      //
      // if (filteredOptions.length) {
      //   set({
      //     ...state,
      //     filteredOptions,
      //     activeOption: 0,
      //   });
      // }
    } else {
      // removing group from array
      groups.some((g, index) => {
        if (g === group) {
          groups.splice(index, 1);
          return true;
        }
        return false;
      });

      // const filteredOptions = optionsKeys
      //   .filter(key => groups.includes(state.options[key].groupTitle))
      //   .map(key => Number.parseInt(key, 10));
      //
      // set({
      //   ...state,
      //   filteredOptions,
      //   activeOption: 0,
      // });
    }
    setGroupFilter(groups);
  };

  if (props.groups.length) {
    return props.groups.map((group, index) => {
      const key = `${group}${index}`;
      return (
        <ListBoxOptionStyled key={key} htmlFor={key}>
          <Checker
            id={key}
            onChange={toggleGroupFilterChecked(group)}
            isChecked={props.groupsFiltered.includes(group)}
          />
          <span>{group}</span>
        </ListBoxOptionStyled>
      );
    });
  }
  return null;
}

Groups.propTypes = propTypes;
Groups.defaultProps = defaultProps;
