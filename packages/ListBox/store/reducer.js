export default function reducer(state, action) {
  switch (action.type) {
    case "listbox:init":
      console.log("listbox:init");
      debugger;
      return state;

    case "popover:open":
      console.log("popover:open");
      return state;

    case "popover:close":
      console.log("popover:close");
      return state;

    case "popover:toggle":
      console.log("popover:toggle");
      return state;

    case "option:active":
      console.log("popover:active");
      return state;

    default:
      return state;
  }
}
