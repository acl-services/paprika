import React from "react";
import ProgressAccordion from "../../src";

export const mockResponses = [
  {
    heading: "What?",
    body: <p>Is on second.</p>,
  },
  {
    heading: "Why?",
    body: <p>Is in left field.</p>,
  },
  {
    heading: "When?",
    body: (
      <>
        <p>
          Lorem ipsum dolor amet ennui wolf trust fund vinyl leggings butcher fingerstache. Occupy hot chicken swag
          beard, DIY kombucha unicorn pour-over coloring book brunch.
        </p>
        <p>
          Kinfolk asymmetrical bicycle rights artisan, typewriter single-origin coffee heirloom. Hammock pug bicycle
          rights authentic, trust fund forage tote bag swag.
        </p>
      </>
    ),
  },
  {
    heading: "Where?",
  },
];

export const generateItems = items =>
  items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ProgressAccordion.Responses.Item key={index} heading={item.heading}>
      {item.body}
    </ProgressAccordion.Responses.Item>
  ));

export default generateItems(mockResponses);
