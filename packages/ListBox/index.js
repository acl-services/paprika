// - [x] height of the popover
// - [x] isDisabled property
//    - on isDisabled be sure all interaction like keyup keydown don't trigger any interaction
// - [x] destructuring ...moreProps
// - [x] implementing blank option, don't think this is responsability of the component
// - [] testing
// - [] code cleaning
// - [] style cleaning
// - [] documentation
// - [] Bugs
//   - [] When selecting the last option and pressing enter on the accept button
//        the option toggle their selection
//   - [x] while navigating with the keyboard if you are in the last option
//        and close the listbox, clicking arrow key, not longer open the
//        listbox though, click up will do it.
import React from "react";
import ListBoxComponent, { propTypes, defaultProps } from "./ListBox";
import Provider from "./store/Provider";
import Group from "./components/Group";
import Option from "./components/Option";

const ListBox = React.forwardRef((props, ref) => {
  return (
    <Provider {...props} options={props.children}>
      <ListBoxComponent {...props} ref={ref} />
    </Provider>
  );
});

export default ListBox;

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
