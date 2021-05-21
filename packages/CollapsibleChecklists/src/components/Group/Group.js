import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@paprika/checkbox";
import Collapsible from "@paprika/collapsible";
import CollapsibleChecklistsContext from "../../CollapsibleChecklistsContext";
import Item from "../Item";
import groupStyles from "./Group.styles";

const propTypes = {
  /** Probably an array of "Items", but could be a Spinner or anything else */
  children: PropTypes.node,
  /** If checkbox is checked by default */
  isCheckedByDefault: PropTypes.bool,
  /** If CollapsibleChecklists is disabled */
  isDisabled: PropTypes.bool,
  /** Sets a visual state whether a checklist has been checked or not */
  isIndeterminateByDefault: PropTypes.bool,
  /** Sets if the CollapsibleChecklists is open */
  onExpand: PropTypes.func,
  /** Indicate the title for the checklist */
  title: PropTypes.node.isRequired,
};

const defaultProps = {
  children: [],
  isCheckedByDefault: false,
  isDisabled: false,
  isIndeterminateByDefault: false,
  onExpand: null,
};

function getChildData(children, isCheckedByDefault) {
  let allChildItemsAreChecked = true;
  let allChildItemsAreUnChecked = true;
  let numberOfChildItems = 0;

  React.Children.forEach(children, child => {
    if (child.type === Item) {
      numberOfChildItems++;
      if (child.props.isChecked) {
        allChildItemsAreUnChecked = false;
      } else {
        allChildItemsAreChecked = false;
      }
    }
  });

  if (numberOfChildItems === 0) {
    allChildItemsAreChecked = false;

    if (isCheckedByDefault) {
      allChildItemsAreChecked = true;
    }
  }

  return { numberOfChildItems, allChildItemsAreChecked, allChildItemsAreUnChecked };
}

function Group(props) {
  const { children, isCheckedByDefault, isDisabled, isIndeterminateByDefault, onExpand, title, ...moreProps } = props;
  const onChange = React.useContext(CollapsibleChecklistsContext);
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const checkedState = React.useMemo(() => {
    const { allChildItemsAreChecked, allChildItemsAreUnChecked } = getChildData(children, isCheckedByDefault);

    if (allChildItemsAreChecked) {
      return Checkbox.types.state.CHECKED;
    }

    if (allChildItemsAreUnChecked) {
      return Checkbox.types.state.UNCHECKED;
    }

    return Checkbox.types.state.INDETERMINATE;
  }, [children, isCheckedByDefault]);

  function toggleChildren() {
    const childItems = [];
    React.Children.forEach(children, child => {
      if (child.type === Item) {
        childItems.push(child);
      }
    });

    if (childItems.length === 0) {
      return;
    }

    const allChildItemsAreChecked =
      childItems.filter(childItem => childItem.props.isChecked || childItem.props.isDisabled).length ===
      childItems.length;

    let childItemsToChange = [];
    if (allChildItemsAreChecked) {
      childItemsToChange = childItems.filter(childItem => !childItem.props.isDisabled);
    } else {
      childItemsToChange = childItems.filter(childItem => !childItem.props.isChecked && !childItem.props.isDisabled);
    }

    onChange(childItemsToChange);
  }

  function expandGroupAndToggleChildren() {
    if (isDisabled) {
      return;
    }

    if (isCollapsed) {
      setIsCollapsed(false);

      if (onExpand) {
        onExpand();
        // Note that if `onExpand` makes an API call to update the Group's children, toggleChildren() will NOT select them. The
        // consumer will need to click on the checkbox again after the API has completed to select them.
        // Making `onExpand` return a Promise, then running `toggleChildren()` after the Promise has resolved doesn't work
        // either; we believe because in the React process, the next line that runs is the one below - where the children have
        // not changed in memory.
      }
    }

    toggleChildren();
  }

  /* eslint-disable jsx-a11y/label-has-associated-control */
  const label = (
    <label>
      <Checkbox
        checkedState={checkedState}
        data-checkbox-group-is-indeterminate={checkedState === Checkbox.types.state.INDETERMINATE ? "true" : "false"}
        isDisabled={isDisabled}
        onChange={expandGroupAndToggleChildren}
        size={Checkbox.types.size.SMALL}
      />
      {title}
    </label>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */

  const modifiedChildren = [];
  React.Children.forEach(children, (child, index) => {
    const newProps = {
      key: `${title}-child-${index}`,
      isDisabled: isDisabled || child.props.isDisabled,
    };

    if (child.type.displayName === Item.displayName) {
      newProps.onChange = () => onChange([child]);
    }

    modifiedChildren.push(React.cloneElement(child, newProps));
  });

  return (
    <Collapsible
      a11yText={title}
      css={groupStyles}
      hasOnlyIconToggle
      isCollapsed={isCollapsed}
      label={label}
      onClick={() => {
        if (isCollapsed && onExpand) {
          onExpand();
        }
        setIsCollapsed(!isCollapsed);
      }}
      {...moreProps}
    >
      {modifiedChildren}
    </Collapsible>
  );
}

Group.displayName = "Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
export default Group;
