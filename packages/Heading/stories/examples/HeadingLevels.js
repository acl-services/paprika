import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Heading from "../../src";

const HeadingLevelsStory = () => {
  return (
    <Story>
      <h5>&lt;Heading&gt; with paragraph</h5>
      <Heading level={1} a11yText="The First Heading">
        Heading One – Man Braid Selfies
      </Heading>
      <p>
        Lorem ipsum dolor amet blog direct trade salvia marfa whatever, selvage ennui portland man bun hexagon yr. Vegan
        cardigan twee next level 90s palo santo.
      </p>
      <Heading level={2}>Heading Two – Retro Distillery</Heading>
      <p>
        Single-origin coffee pickled af 3 wolf moon adaptogen lomo normcore aesthetic. Godard seitan asymmetrical
        lumbersexual try-hard bushwick 90s raw denim.
      </p>
      <Heading level={3}>Heading Three – Live-edge Hashtag</Heading>
      <p>
        Cold-pressed roof party blog direct trade salvia marfa whatever, selvage ennui portland man bun hexagon yr.
        Vegan cardigan twee next level 90s palo santo.
      </p>
      <Heading level={4}>Heading Four – Mumblecore Asymmetrical Meggings</Heading>
      <p>
        Pickled af 3 wolf moon adaptogen lomo normcore aesthetic. Godard seitan asymmetrical lumbersexual try-hard
        bushwick 90s raw denim.
      </p>
      <Heading level={5}>Heading Five – Poke Bowl Hexagon Longboard Locavore</Heading>
      <p>
        Craft beer unicorn retro blog direct trade salvia marfa whatever, selvage ennui portland man bun hexagon yr.
        Vegan cardigan twee next level 90s palo santo.
      </p>
      <Heading level={6}>Heading Six – Ethical Slow-carb IPA Normcore Man Bun Prism</Heading>
      <p>
        Post-ironic single-origin coffee pickled af 3 wolf moon adaptogen lomo normcore aesthetic. Godard seitan
        asymmetrical lumbersexual try-hard bushwick 90s raw denim.
      </p>
      <Rule />
      <h5>&lt;Heading&gt; with display level</h5>
      <Rule />
      <Heading level={1} displayLevel={6}>
        Heading One
      </Heading>
      <Heading level={2} displayLevel={5}>
        Heading Two
      </Heading>
      <Heading level={3} displayLevel={4}>
        Heading Three
      </Heading>
      <Heading level={4} displayLevel={3}>
        Heading Four
      </Heading>
      <Heading level={5} displayLevel={2}>
        Heading Five
      </Heading>
      <Heading level={6} displayLevel={1}>
        Heading Six
      </Heading>
      <Rule />
      <h5>&lt;Heading&gt; with isLight</h5>
      <br />
      <Heading level={1} isLight>
        Heading One with isLight
      </Heading>
      <Heading level={2} isLight>
        Heading Two with isLight
      </Heading>
      <Heading level={3} isLight>
        Heading Three with isLight
      </Heading>
      <Heading level={4} isLight>
        Heading Four with isLight
      </Heading>
      <Heading level={5} isLight>
        Heading Five with isLight
      </Heading>
      <Heading level={6} isLight>
        Heading Six with isLight
      </Heading>
      <br />
      <Rule />
      <h5>&lt;Heading&gt; with invalid level</h5>
      <Rule />
      <Heading level={-5}>Heading -5</Heading>
      <Heading level={9}>Heading 9</Heading>
    </Story>
  );
};

export default HeadingLevelsStory;
