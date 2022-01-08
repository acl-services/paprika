import React from "react";
// import styled from "styled-components";
// import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
// import stylers from "@paprika/stylers";
// import Button from "@paprika/button";
// import Panel from "@paprika/panel";
// import Popover from "@paprika/popover";
// import Heading from "@paprika/heading";
// import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Takeover from "../src";
// import * as types from "../src/types";
import { repeat } from "storybook/assets/styles/common.styles";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import TakeoverStory from "./TakeoverStory";




// /* Long block to test body scroll locking */
// const LongBlock = styled.div`
//   padding-bottom: 200vh;
// `;

// const DemoFullWidthContent = styled.div`
//   background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
//   flex: 1 1 auto;
// `;

export default {
  title: getStoryName("Takeover"),
  component: Takeover,
};

export const showcase = () => (
  <ExampleStory storyName="Takeover" tagline={ExampleStory.defaultTaglines.showcase}>
   <TakeoverStory>
      <Takeover.Content>
        {repeat(12, key => (
          <p key={key}>Post-ironic asymmetrical small batch coloring book woke pickled authentic.</p>
        ))}
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};



// const Showcase = () => (
//   <Story>
//     <Heading level={1} displayLevel={2} isLight>
//       <code>&lt;Takeover /&gt;</code>
//     </Heading>
//     <Tagline>
//       <b>Showcase</b> – Interact with the props API
//     </Tagline>
//     <Rule />
//     <TakeoverStory>
//       <Takeover.Content>
//         {repeat(12, key => (
//           <p key={key}>Post-ironic asymmetrical small batch coloring book woke pickled authentic.</p>
//         ))}
//       </Takeover.Content>
//     </TakeoverStory>
//   </Story>
// );



