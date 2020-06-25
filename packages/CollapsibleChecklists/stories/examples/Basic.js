import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import CollapsibleChecklists from "../../src/index";

// from API call #1
const movies = {
  Action: [
    { id: 1, title: "Die hard", isChecked: false },
    {
      id: 2,
      title:
        "Lorem hipsum unicorn distillery pour-over hammock listicle readymade mumblecore craft beer cold-pressed vaporware forage.",
      isChecked: false,
    },
    { id: 3, title: "Rambo", isChecked: false },
    { id: 4, title: "Rocky", isChecked: false },
  ],
  "Fantasy unicorn distillery pour-over hammock listicle readymade mumblecore": [
    { id: 5, title: "Tiger and the dragon", isChecked: false },
    { id: 6, title: "Lord of the Rings", isChecked: false },
    { id: 7, title: "Matrix", isChecked: false },
  ],
  Adventure: [
    { id: 8, title: "Hook", isChecked: false },
    { id: 9, title: "Avengers", isChecked: false },
    { id: 10, title: "Toy Story", isChecked: false },
  ],
};

// from API call #2
const tvShows = {
  Gameshow: [
    { id: 1, title: "The Price is Right", isChecked: false },
    { id: 2, title: "Wheel of Fortune", isChecked: false },
  ],
  Reality: [
    { id: 3, title: "Survivor", isChecked: false },
    { id: 4, title: "Big Brother", isChecked: false },
    { id: 5, title: "The Bachelor", isChecked: false },
  ],
};

function Basic2Story() {
  const merged = { movies, tvShows };
  const [items, setItems] = React.useState(merged);

  function handleChangeItems(itemsChanged) {
    const newMovies = { ...movies };
    const newTvShows = { ...tvShows };

    itemsChanged.forEach(itemChanged => {
      if (newMovies[itemChanged.props.kind] !== undefined) {
        const matchedMovie = newMovies[itemChanged.props.kind].filter(movie => movie.id === itemChanged.props.id)[0];
        matchedMovie.isChecked = !matchedMovie.isChecked;
      }

      if (newTvShows[itemChanged.props.kind] !== undefined) {
        const matchedTvShow = newTvShows[itemChanged.props.kind].filter(
          tvShow => tvShow.id === itemChanged.props.id
        )[0];
        matchedTvShow.isChecked = !matchedTvShow.isChecked;
      }
    });

    const newMerged = { movies: newMovies, tvShows: newTvShows };
    setItems(newMerged);
  }

  function renderCollapsibleChecklists(title, items) {
    return (
      <React.Fragment>
        <CollapsibleChecklists.Heading>{title}</CollapsibleChecklists.Heading>

        {Object.keys(items).map(key => {
          return (
            <CollapsibleChecklists.Group title={key}>
              {items[key].map(item => {
                return (
                  <CollapsibleChecklists.Item isChecked={item.isChecked} kind={key} id={item.id}>
                    {item.title}
                  </CollapsibleChecklists.Item>
                );
              })}
            </CollapsibleChecklists.Group>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <Story>
      <CollapsibleChecklists onChange={handleChangeItems}>
        {renderCollapsibleChecklists("Movies", items.movies)}
        {renderCollapsibleChecklists("TV Shows", items.tvShows)}
      </CollapsibleChecklists>
    </Story>
  );
}

export default Basic2Story;
