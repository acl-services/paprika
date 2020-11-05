import React from "react";
import { number, select } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";

import CollapsibleText from "../../src";

const exampleChildren = {
  Short: "Lorem hipsum raw denim listicle mixtape.",
  Long:
    "Lorem hipsum lomo cronut meggings hella tattooed affogato. Pug cred plaid, neutra lyft typewriter locavore beard vice art party glossier woke kinfolk. Craft beer keytar poke man bun. Yr polaroid flannel air plant. Brunch tote bag seitan meditation ennui, adaptogen yr health goth. Hashtag disrupt echo park wayfarers, air plant tofu 8-bit green juice tilde umami kickstarter waistcoat.",
  "Rich-text node": (
    <>
      <p>
        Hella asymmetrical offal, drinking vinegar pinterest locavore pug twee lo-fi farm-to-table keytar vaporware
        dreamcatcher.
      </p>
      <ul>
        <li>Lorem hipsum next level typewriter vape forage.</li>
        <li>Succulents paleo aesthetic kickstarter.</li>
        <li>Prism vaporware intelligentsia letterpress 8-bit, waistcoat.</li>
        <li>Butcher thundercats bicycle rights before they sold out.</li>
        <li>Cronut copper mug gluten-free.</li>
        <li>Mustache swag jianbing try-hard fam.</li>
        <li>Chillwave tacos kombucha lo-fi meh lyft.</li>
        <li>Pour-over shabby chic austin pabst freegan.</li>
      </ul>
    </>
  ),
};

const exampleProps = () => ({
  collapsedLength: number("collapsedLength", 255),
  children: select("children", Object.keys(exampleChildren), "Long"),
});

const Showcase = props => {
  return (
    <ExampleStory storyName="CollapsibleText" tagline={ExampleStory.defaultTaglines.showcase}>
      <CollapsibleText {...props}>{exampleChildren[props.children]}</CollapsibleText>
    </ExampleStory>
  );
};

export default () => <Showcase {...exampleProps()} />;
