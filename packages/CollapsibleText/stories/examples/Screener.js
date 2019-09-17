import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import CollapsibleText from "../../src";

const screenerScript = new Steps()
  .snapshot("Collapsed")
  .click(".screener-collapsible-text--basic [data-pka-anchor='button']")
  .click(".screener-collapsible-text--rich [data-pka-anchor='button']")
  .snapshot("Expanded")
  .end();

const ExampleStory = () => {
  return (
    <Screener steps={screenerScript}>
      <Story>
        <CollapsibleText>Lorem hipsum raw denim listicle mixtape.</CollapsibleText>
        <Rule />
        <CollapsibleText>
          Lorem hipsum roof party disrupt post-ironic, photo booth marfa hot chicken iceland readymade. Small batch
          succulents unicorn direct trade, truffaut fanny pack man bun poke vexillologist copper mug master cleanse
          iceland chillwave stumptown. Bespoke adaptogen hexagon.
        </CollapsibleText>
        <Rule />
        <CollapsibleText collapsedLength={64} className="screener-collapsible-text--basic">
          Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache
          la croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
          Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
          ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
          90s.
        </CollapsibleText>
        <Rule />
        <CollapsibleText className="screener-collapsible-text--rich">
          <p>
            Lorem hipsum cronut meggings hella tattooed affogato. Pug cred plaid, neutra lyft typewriter locavore beard
            vice art party glossier woke kinfolk. Craft beer keytar poke man bun. Yr polaroid flannel air plant. Brunch
            tote bag seitan meditation ennui, adaptogen yr health goth. Hashtag disrupt echo park wayfarers, air plant
            tofu 8-bit green juice tilde umami kickstarter waistcoat.
          </p>
          <p>
            Hella asymmetrical offal, drinking vinegar pinterest locavore pug twee lo-fi farm-to-table keytar vaporware
            dreamcatcher. Ugh salvia woke meditation williamsburg shoreditch. Crucifix portland raw denim chia
            knausgaard occupy literally umami. Bushwick VHS meh keffiyeh small batch slow-carb. Tofu whatever gastropub
            copper mug, flannel lyft cronut mumblecore. Swag palo santo ennui plaid shoreditch lyft celiac poke pop-up.
          </p>
        </CollapsibleText>
      </Story>
    </Screener>
  );
};

export default ExampleStory;
