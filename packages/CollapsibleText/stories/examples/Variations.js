import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import ExampleStory from "storybook/components/ExampleStory";
import StoryHeading from "storybook/components/StoryHeading";
import CollapsibleText from "../../src";

const Variations = () => (
  <ExampleStory storyName="CollapsibleText" tagline={ExampleStory.defaultTaglines.variations}>
    <Gap.Small />
    <StoryHeading level={2}>Short</StoryHeading>
    <CollapsibleText>Lorem hipsum raw denim listicle mixtape.</CollapsibleText>

    <StoryHeading level={2}>Threshold</StoryHeading>
    <CollapsibleText>
      Lorem hipsum roof party disrupt post-ironic, photo booth marfa hot chicken iceland readymade. Small batch
      succulents unicorn direct trade, truffaut fanny pack man bun poke vexillologist copper mug master cleanse iceland
      chillwave stumptown. Bespoke adaptogen hexagon.
    </CollapsibleText>

    <StoryHeading level={2}>Long</StoryHeading>
    <CollapsibleText>
      Lorem hipsum lomo cronut meggings hella tattooed affogato. Pug cred plaid, neutra lyft typewriter locavore beard
      vice art party glossier woke kinfolk. Craft beer keytar poke man bun. Yr polaroid flannel air plant. Brunch tote
      bag seitan meditation ennui, adaptogen yr health goth. Hashtag disrupt echo park wayfarers, air plant tofu 8-bit
      green juice tilde umami kickstarter waistcoat.
    </CollapsibleText>

    <Gap />

    <StoryHeading level={2}>
      <code>collapsedLength = 64</code>
    </StoryHeading>
    <CollapsibleText collapsedLength={64} a11yText="meditation cardigans">
      Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
      croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
      Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
      ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony 90s.
    </CollapsibleText>

    <Gap />

    <StoryHeading level={2}>
      <code>{"<p>"} </code>&nbsp;x 2
    </StoryHeading>
    <CollapsibleText>
      <p>
        Lorem hipsum cronut meggings hella tattooed affogato. Pug cred plaid, neutra lyft typewriter locavore beard vice
        art party glossier woke kinfolk. Craft beer keytar poke man bun. Yr polaroid flannel air plant. Brunch tote bag
        seitan meditation ennui, adaptogen yr health goth. Hashtag disrupt echo park wayfarers, air plant tofu 8-bit
        green juice tilde umami kickstarter waistcoat.
      </p>
      <p>
        Hella asymmetrical offal, drinking vinegar pinterest locavore pug twee lo-fi farm-to-table keytar vaporware
        dreamcatcher. Ugh salvia woke meditation williamsburg shoreditch. Crucifix portland raw denim chia knausgaard
        occupy literally umami. Bushwick VHS meh keffiyeh small batch slow-carb. Tofu whatever gastropub copper mug,
        flannel lyft cronut mumblecore. Swag palo santo ennui plaid shoreditch lyft celiac poke pop-up.
      </p>
    </CollapsibleText>

    <StoryHeading level={2}>
      <code>{"<ul>"}</code>&nbsp;List
    </StoryHeading>
    <CollapsibleText>
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
    </CollapsibleText>
  </ExampleStory>
);

export default Variations;
