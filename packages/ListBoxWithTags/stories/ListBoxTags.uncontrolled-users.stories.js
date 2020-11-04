import React from "react";
import { getStoryName } from "storybook/storyTree";
import Avatar from "@paprika/avatar";
import Popover from "@paprika/popover";
import { getAvatarColors } from "@paprika/avatar/lib/helpers";
import ListBoxTags, { useListBoxWithTags } from "../src";

const storyName = getStoryName("ListBoxTags");

export default {
  title: storyName,
};

// prettier-ignore
const data = [{ year: 1961, nationality: "(ITA)", name: "Federico Fellini", movie: "La Dolce Vita, Italian" },{ year: 1962, nationality: "(ITA)", name: "Pietro Germi", movie: "Divorce Italian Style, Italian" },{ year: 1963, nationality: "(ITA)", name: "Federico Fellini", movie: "8½, Italian" },{ year: 1964, nationality: "(GRE)", name: "Michael Cacoyannis", movie: "Zorba the Greek, Greek" },{ year: 1965, nationality: "(JPN)", name: "Hiroshi Teshigahara", movie: "Woman in the Dunes, Japanese" },{ year: 1966, nationality: "(ITA)", name: "Michelangelo Antonioni", movie: "Blowup, Italian" },{ year: 1966, nationality: "(FRA)", name: "Claude Lelouch", movie: "A Man and a Woman, French" },{ year: 1968, nationality: "(ITA)", name: "Gillo Pontecorvo", movie: "The Battle of Algiers, Arabic & French" },{ year: 1969, nationality: "(GRE)", name: "Costa-Gavras", movie: "Z, French †" },{ year: 1970, nationality: "(ITA)", name: "Federico Fellini", movie: "Fellini Satyricon, Italian" },{ year: 1972, nationality: "(SWE)", name: "Jan Troell", movie: "The Emigrants, Swedish †" },{ year: 1973, nationality: "(SWE)", name: "Ingmar Bergman", movie: "Cries and Whispers, Swedish †" },{ year: 1974, nationality: "(FRA)", name: "François Truffaut", movie: "Day Night, French" },{ year: 1975, nationality: "(ITA)", name: "Federico Fellini", movie: "Amarcord, Italian" },{ year: 1976, nationality: "(SWE)", name: "Ingmar Bergman", movie: "Face to Face, Swedish" },{ year: 1976, nationality: "(ITA)", name: "Lina Wertmüller", movie: "Seven Beauties, Italian" },{ year: 1979, nationality: "(FRA)", name: "Edouard Molinaro", movie: "La Cage aux Folles, French" },{ year: 1982, nationality: "(GER)", name: "Wolfgang Petersen", movie: "Das Boot, German" },{ year: 1983, nationality: "(SWE)", name: "Ingmar Bergman", movie: "Fanny and Alexander, Swedish" },{ year: 1985, nationality: "(JPN)", name: "Akira Kurosawa", movie: "Ran, Japanese" },{ year: 1987, nationality: "(SWE)", name: "Lasse Hallström", movie: "My Life as a Dog, Swedish" },{ year: 1994, nationality: "(POL)", name: "Krzysztof Kieślowski", movie: "Three Colours: Red, French" },{ year: 1995, nationality: "(GBR)", name: "Michael Radford", movie: "Il Postino: The Postman, Italian & Spanish †" },{ year: 1998, nationality: "(ITA)", name: "Roberto Benigni", movie: "Life Is Beautiful, Italian †" },{ year: 2000, nationality: "(TWN)", name: "Ang Lee", movie: "Crouching Tiger, Hidden Dragon, Mandarin Chinese †" },{ year: 2002, nationality: "(ESP)", name: "Pedro Almodóvar", movie: "Talk to Her, Spanish" },{ year: 2003, nationality: "(BRA)", name: "Fernando Meirelles", movie: "City of God, Portuguese" },{ year: 2007, nationality: "(USA)", name: "Julian Schnabel", movie: "The Diving Bell and the Butterfly, French" },{ year: 2011, nationality: "(FRA)", name: "Michel Hazanavicius", movie: "The Artist, French ‡" },{ year: 2012, nationality: "(AUT)", name: "Michael Haneke", movie: "Amour, French †" },{ year: 2018, nationality: "(MEX)", name: "Alfonso Cuarón", movie: "Roma, Spanish †" },{ year: 2018, nationality: "(POL)", name: "Paweł Pawlikowski", movie: "Cold War, Polish" },{ year: 2019, nationality: "(KOR)", name: "Bong Joon-ho", movie: "Parasite, Korean ‡" }];

const processedData = data.map((d, index) => {
  const [name, lastName] = d.name.split(" ");
  const email = `${name}.${lastName}@gmail.com`;
  const username = `@${name}_${lastName}`;
  return { ...d, email, username, id: index };
});

const defaultFilteredData = processedData;
const defaultData = processedData;

function App() {
  const {
    handleChange,
    isSelected,
    handleRemove,
    handleAddedOption,
    filteredData,
    handleFilter,
    getSelectedOptions,
  } = useListBoxWithTags("id", { defaultData, defaultFilteredData, filterAttribute: "name" });

  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  function renderPill({ option, Pill, onRemove }) {
    const color = getAvatarColors(option.name);
    return (
      <Popover isDark isEager zIndex={101}>
        <Popover.Trigger>
          <Pill onRemove={onRemove} key={option.id}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: color.backgroundColor,
                  borderRadius: "50%",
                  boxSizing: "border-box",
                  color: color.fontColor,
                  display: "flex",
                  height: "24px",
                  justifyContent: "center",
                  marginRight: "8px",
                  padding: "3px",
                  width: "24px",
                  fontSize: ".8rem",
                  lineHeight: 1,
                }}
              >
                {option.name.substring(0, 2)}
              </div>
              {option.username}
            </div>
          </Pill>
        </Popover.Trigger>
        <Popover.Tip />
        <Popover.Content>
          <Popover.Card>
            <dl>
              <dt style={{ fontWeight: "bold" }}>{option.name}</dt>
              <dd style={{ margin: "2px" }}>
                Oscar winner of: {option.year}
                <br />
                For: {option.year}
                <br />
                Email: {option.email}
                <br />
                UserName: {option.username}
              </dd>
            </dl>
          </Popover.Card>
        </Popover.Content>
      </Popover>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <div style={{ padding: "32px" }}>
      <form onSubmit={handleSubmit}>
        <div>Select your favorite Oscar winners:</div>
        {hasSubmitted ? (
          <ul>
            <div>your selections: </div>
            {getSelectedOptions().map(option => (
              <li>
                {option.name} {option.userName}
              </li>
            ))}
          </ul>
        ) : null}
        <ListBoxTags
          filter={handleFilter}
          noResultsMessage="No results found, but you can add an email and then press enter..."
          onChange={handleChange}
          onCustomOption={handleAddedOption()}
          onRemove={handleRemove}
          renderPill={renderPill}
          selectedOptions={getSelectedOptions()}
        >
          {filteredData.map(option => {
            if (typeof option.isCustom !== "undefined") {
              return null;
            }

            const color = getAvatarColors(option.name);
            return !isSelected(option.id) ? (
              <ListBoxTags.Option id={option.id} key={option.id} label={option.name}>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      size={Avatar.types.size.SMALL}
                      backgroundColor={color.backgroundColor}
                      color={color.fontColor}
                    >
                      {option.name}
                    </Avatar>
                    <div style={{ fontSize: "1rem", paddingLeft: "8px" }}>{option.name}</div>
                    <div
                      style={{
                        fontSize: ".85rem",
                        color: "#111",
                        background: "#EEE",
                        padding: "3px",
                        borderRadius: "4px",
                        margin: "0 4px",
                      }}
                    >
                      {option.username}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: ".85rem",
                      color: "#111",
                      padding: "3px",
                      marginLeft: "36px",
                    }}
                  >
                    winner: {option.year} for {option.movie}
                  </div>
                </div>
              </ListBoxTags.Option>
            ) : null;
          })}
        </ListBoxTags>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export const uncontrolledUsers = () => <App />;
