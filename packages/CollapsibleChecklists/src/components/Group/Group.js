import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import CollapsibleChecklistsContext from "../../CollapsibleChecklistsContext";
import Item from "../Item";
import groupStyles from "./Group.styles";

const propTypes = {
  children: PropTypes.node, // probably an array of "Items", but could be a Spinner or anything else
  isCheckedByDefault: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isIndeterminateByDefault: PropTypes.bool,
  onExpand: PropTypes.func,
  title: PropTypes.node.isRequired,
};

const defaultProps = {
  children: [],
  isCheckedByDefault: false,
  isDisabled: false,
  isIndeterminateByDefault: false,
  onExpand: null,
};

function useIsIndeterminate(checkboxRef) {
  const [, setIsIndeterminate] = React.useState(null);
  React.useEffect(() => {
    setIsIndeterminate(checkboxRef.current.indeterminate);
  }, [checkboxRef.current.indeterminate]);
}

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

function setIsIndeterminate(children, checkboxRef, isCheckedByDefault, isIndeterminateByDefault) {
  const { numberOfChildItems, allChildItemsAreChecked, allChildItemsAreUnChecked } = getChildData(
    children,
    isCheckedByDefault
  );

  if (numberOfChildItems === 0 && isIndeterminateByDefault) {
    checkboxRef.current.indeterminate = true; // eslint-disable-line no-param-reassign
  } else if (numberOfChildItems > 0 && (allChildItemsAreChecked || allChildItemsAreUnChecked)) {
    checkboxRef.current.indeterminate = false; // eslint-disable-line no-param-reassign
  } else if (numberOfChildItems > 0) {
    checkboxRef.current.indeterminate = true; // eslint-disable-line no-param-reassign
  }
}

function Group(props) {
  const { children, isCheckedByDefault, isDisabled, isIndeterminateByDefault, onExpand, title } = props;
  const onChange = React.useContext(CollapsibleChecklistsContext);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const checkboxRef = React.useRef({});
  useIsIndeterminate(checkboxRef);

  setIsIndeterminate(children, checkboxRef, isCheckedByDefault, isIndeterminateByDefault);
  const { allChildItemsAreChecked } = getChildData(children, isCheckedByDefault);

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
    <React.Fragment>
      <label>
        <input
          ref={checkboxRef}
          checked={allChildItemsAreChecked}
          type="checkbox"
          disabled={isDisabled}
          onChange={expandGroupAndToggleChildren}
        />
        {title}
      </label>
    </React.Fragment>
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
    >
      {modifiedChildren}
    </Collapsible>
  );
}

Group.displayName = "Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
export default Group;
