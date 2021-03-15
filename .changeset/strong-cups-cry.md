---
"@paprika/list-box": major
---

💥 Breaking change is:

Refactored keyboard events for ↑ and ↓ for the list component:

This is a partial refactor for the keyboard navigation for the `ListBox` component we switched from tracking the options on the state against tracking the actual rendered option on the html.
The previous helps to only track the real options that we should consider each time the users press ↑ or ↓.

✏️ why the change was made:
The original implementation for the keyboard navigation for the ListBox didn't take in consideration the focus() event and uses the options state to figure it out
if the next element can be selected, there are ListBox.Divider, ListBox.RawOption, ListBox.Option `isDisabled`, and a case when the options are filtered.
So instead of tracking all possible cases and combination now we only track whatever the ListBox has render and each time the user press ↑ or ↓ the component looks for
the next available sibling from the current one focus which is more efficient than trying to find the next available in the option list.

👷 How a consumer should update their code:
There is not really an action from the consumer side of things, this is marked as a breaking change because might break side code if you were in somehow depending in the
previous implementation. But most likely you wont need to take further actions

- `Content.js` No longer requires to handle onBlur and onFocus state.
- `Filter.js` onBlur is not longer required, also fixed missing cleaning function for two hooks and fixed a minor bug that will scroll the popover if the user use the mousewheel
- `optionState.js` Now is possible to access state.optionsIndex and access the index of any given rendered by their uuid
- `option.js` remove `listBoxHasFocus={listBoxHasFocus}` prop not longer relevant.

**option.js**

- ✅ Added getOptions, getNextUp and getNextDown methods to detect which is the next focusable option
- 🗑 Remove getNextOptionActiveIndex and getNextOptionActiveIndexLooping which were really confusing methods not long necessary!
- ✨ `handleArrowKeys` method is cleaner and easier to understand

**Trigger.js**

- Now the ListBox will focus automatically in the first selected option when multi and in the selected option in single
- When there is not a selected option in multi will focus on the first element while in single will not do anything apart from opening the options

**reducer.js**

- 🙅‍♀️ useListBox.types.setListBoxHasFocus no longer necessary
- ✨ useListBox.types.applyFilter simplified version now
