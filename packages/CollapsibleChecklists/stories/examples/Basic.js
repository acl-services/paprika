import React from "react";
import CollapsibleChecklists from "../../src/index";

const _items = {
  Action: [
    { id: 1, item: "Die hard", isChecked: false },
    { id: 2, item: "Speed", isChecked: false },
    { id: 3, item: "Rambo", isChecked: false },
    { id: 4, item: "Rocky", isChecked: false },
  ],
  Fantasy: [
    { id: 5, item: "Tiger and the dragon", isChecked: false },
    { id: 6, item: "Lord of the Rings", isChecked: false },
    { id: 7, item: "Matrix", isChecked: false },
  ],
  Adventure: [
    { id: 8, item: "Hook", isChecked: false },
    { id: 9, item: "Avengers", isChecked: false },
    { id: 10, item: "Toy Story", isChecked: false },
  ],
};

function BasicStory() {
  const [items, setItem] = React.useState(_items);

  function handleChange(itemsChanged) {
    const cloneItems = { ...items };
    itemsChanged.forEach(itemChanged => {
      const { kind, id } = itemChanged.props;
      const i = cloneItems[kind].filter(i => i.id === id)[0];
      i.isChecked = !i.isChecked;
    });
    setItem(cloneItems);
  }

  return (
    <CollapsibleChecklists onChange={handleChange}>
      <CollapsibleChecklists.Heading>Movies</CollapsibleChecklists.Heading>
      {Object.keys(items).map(key => {
        return (
          <CollapsibleChecklists.Group title={key}>
            {items[key].map(movie => {
              return (
                <CollapsibleChecklists.Item isChecked={movie.isChecked} kind={key} id={movie.id}>
                  {movie.item}
                </CollapsibleChecklists.Item>
              );
            })}
          </CollapsibleChecklists.Group>
        );
      })}
    </CollapsibleChecklists>
  );
}

export default BasicStory;
