import React from "react";
import { action } from "@storybook/addon-actions";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Spinner from "../../../Spinner/src/index";
import CollapsibleChecklists from "../../src/index";

const ExampleStory = () => {
  const handleHover = () => {
    action("Hovered")();
  };

  const [sportsData, setSportsData] = React.useState([
    {
      state: "California",
      sports: [
        {
          title: <span>Basketball</span>,
          teams: [
            { isChecked: true, isDisabled: false, name: "Golden State Warriors" },
            { isChecked: false, isDisabled: false, name: "LA Lakers" },
            { isChecked: false, isDisabled: true, name: "LA Clippers" },
            { isChecked: false, isDisabled: false, name: "Sacramento Kings" },
          ],
        },
        {
          title: "Hockey",
          teams: [
            { isChecked: true, isDisabled: false, name: "Anaheim Ducks" },
            { isChecked: true, isDisabled: false, name: "LA Kings" },
            { isChecked: true, isDisabled: false, name: "San Jose Sharks" },
          ],
        },
        {
          title: (
            <span>
              Baseball
              <span
                onFocus={() => {}}
                onMouseOver={handleHover}
                style={{ paddingLeft: "4px", color: "silver", cursor: "pointer" }}
              >
                <InfoIcon />
              </span>
            </span>
          ),
          teams: [
            { isChecked: false, isDisabled: false, name: "Anaheim Angels" },
            { isChecked: false, isDisabled: false, name: "LA Dodgers" },
            { isChecked: false, isDisabled: false, name: "Oakland Athletics" },
            { isChecked: false, isDisabled: false, name: "San Diego Padres" },
            { isChecked: true, isDisabled: false, name: "San Francisco Giants" },
          ],
        },
      ],
    },
    {
      state: "Ohio",
      sports: [
        {
          title: <span>Football (expand to retrieve from API)</span>,
          teams: [
            // This will later be retrieved from an API on expand
          ],
        },
      ],
    },
  ]);

  // For readability
  const californiaBasketball = sportsData[0].sports[0];
  const californiaHockey = sportsData[0].sports[1];
  const californiaBaseball = sportsData[0].sports[2];
  const ohioFootball = sportsData[1].sports[0];

  const handleExpand = () => {
    setTimeout(() => {
      const newSportsData = sportsData.slice(0);
      newSportsData[1].sports[0].teams = [
        { isChecked: false, isDisabled: false, name: "Cincinnati Bengals" },
        { isChecked: false, isDisabled: false, name: "Cleveland Browns" },
      ];
      setSportsData(newSportsData);
    }, 2000);
  };

  function handleOnChange(changedItemsArray) {
    action("handleOnChange")();
    const newSportsData = sportsData.slice(0);
    newSportsData.forEach(newSportsDatum => {
      newSportsDatum.sports.forEach(sport => {
        sport.teams.forEach(team => {
          const thisTeamWasChanged =
            changedItemsArray.filter(changedItem => changedItem.props.foobar === team.name).length > 0;

          if (thisTeamWasChanged) {
            team.isChecked = !team.isChecked; // eslint-disable-line
          }
        });
      });
    });

    setSportsData(newSportsData);
  }

  function renderTeams(teams) {
    return teams.map(team => (
      <CollapsibleChecklists.Item
        foobar={team.name}
        isChecked={team.isChecked}
        isDisabled={team.isDisabled}
        key={team.name}
      >
        {team.name}
      </CollapsibleChecklists.Item>
    ));
  }

  function renderOhioFootballTeams() {
    if (ohioFootball.teams.length === 0) {
      return <Spinner />;
    }

    return renderTeams(ohioFootball.teams);
  }

  return (
    <CollapsibleChecklists onChange={handleOnChange}>
      <CollapsibleChecklists.Heading>California Sports Teams</CollapsibleChecklists.Heading>
      <CollapsibleChecklists.Group title={californiaBasketball.title}>
        {renderTeams(californiaBasketball.teams)}
      </CollapsibleChecklists.Group>
      <CollapsibleChecklists.Group title={californiaHockey.title}>
        {renderTeams(californiaHockey.teams)}
      </CollapsibleChecklists.Group>
      <CollapsibleChecklists.Group title={californiaBaseball.title} isDisabled>
        {renderTeams(californiaBaseball.teams)}
      </CollapsibleChecklists.Group>

      <CollapsibleChecklists.Heading>Ohio Sports Teams</CollapsibleChecklists.Heading>
      <CollapsibleChecklists.Group title={ohioFootball.title} onExpand={handleExpand}>
        {renderOhioFootballTeams()}
      </CollapsibleChecklists.Group>

      <CollapsibleChecklists.Heading>Saskatchewan Sports Teams</CollapsibleChecklists.Heading>
      <div style={{ fontStyle: "italic", padding: "4px" }}>None available (this shows that any child is accepted)</div>
    </CollapsibleChecklists>
  );
};

export default ExampleStory;
