import React from "react";
import ListBox from "../../../src";

const propTypes = {};
const defaultProps = {};

const comics = ["marvel", "dc", "cartoon network", "greek"];

const characters = {
  marvel: ["Hulk", "IronMan", "BlackWidow", "Thor", "Spiderman"],
  dc: ["Batman", "Aquaman", "Flash"],
  greek: ["Apollo", "Mercury", "Zeus"],
  "cartoon network": ["Dexter", "Finn the Human.", "Wallabee Beatles", "Sumo (Clarence)"],
};

export default function Columns() {
  const [selectedComic, setSelectedComic] = React.useState(null);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [output, setOutput] = React.useState(null);

  const refListBox = React.useRef(null);

  const handleLisBoxLeft = index => {
    setSelectedComic(index);
    setSelectedCharacter(null);
  };

  const handleListBoxRight = indexes => {
    setSelectedCharacter(indexes);
  };

  React.useEffect(() => {
    if (selectedComic !== null && (selectedCharacter && selectedCharacter.length)) {
      const output = `You selected comic: ${
        comics[selectedComic]
      } with the following characters: ${selectedCharacter.map(index => characters[comics[selectedComic]][index])}`;
      setOutput(output);
    }
  }, [selectedComic, selectedCharacter]);

  React.useEffect(() => {
    if (refListBox.current) {
      refListBox.current.clear();
    }
  }, [selectedComic]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px" }}>
        <ListBox isInline onChange={handleLisBoxLeft}>
          {comics.map(item => (
            <ListBox.Option key={item}>{item}</ListBox.Option>
          ))}
        </ListBox>
      </div>
      <div style={{ width: "300px" }}>
        {selectedComic !== null ? (
          <ListBox ref={refListBox} isInline isMulti onChange={handleListBoxRight}>
            {characters[comics[selectedComic]].map(item => (
              <ListBox.Option key={item}>{item}</ListBox.Option>
            ))}
          </ListBox>
        ) : (
          <span>empty</span>
        )}
      </div>
      {selectedComic && (selectedCharacter && selectedCharacter.length) ? <div>{output}</div> : null}
    </div>
  );
}

Columns.propTypes = propTypes;
Columns.defaultProps = defaultProps;
