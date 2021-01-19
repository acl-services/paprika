import React from "react";
import ListBox, { useListBoxWithTags } from "../../src";
import animals from "../mocks";

const defaultFilteredData = animals.slice(0, 20);
const emojiData = [{ label: "emoji-dog", emoji: "🐶" }, { label: "emoji-cat", emoji: "😸" }];
const defaultData = [...animals, ...emojiData];

export default function App() {
  const {
    isSelected,
    filteredData,
    getSelectedOptions,
    snapshotSelectedKeys,
    setSelectedKeys,
    ...moreUseListBoxWithTagsProps
  } = useListBoxWithTags({
    key: "label",
    defaultData,
    defaultFilteredData,
  });

  const [snapshot, setSnapshot] = React.useState(snapshotSelectedKeys());

  /**
   * Extra work will be required it in order to hide the <ListBox.Divider /> once all items has been selected
   */
  return (
    <div style={{ padding: "32px" }}>
      <ListBox selectedOptions={getSelectedOptions()} {...moreUseListBoxWithTagsProps}>
        <ListBox.Divider>Furry values</ListBox.Divider>
        {emojiData.map(option => {
          return !isSelected(option.label) ? (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              {option.label} {option.emoji}
            </ListBox.Option>
          ) : null;
        })}

        <ListBox.Divider>Boring values</ListBox.Divider>
        {filteredData.map(option => {
          return !isSelected(option.label) ? (
            <ListBox.Option value={option.label} key={option.label} label={option.label}>
              {option.label}
            </ListBox.Option>
          ) : null;
        })}
        <ListBox.Footer
          onClickAccept={() => {
            setSnapshot(snapshotSelectedKeys());
          }}
          onClickClear={() => {
            setSelectedKeys(snapshot);
          }}
          onClickCancel={() => {
            setSelectedKeys(snapshot);
          }}
        />
      </ListBox>
    </div>
  );
}
