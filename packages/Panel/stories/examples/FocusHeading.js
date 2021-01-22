import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Panel from "../../src";

export default function FocusHeading() {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Story>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Panel
      </Button>
      <Panel
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        onAfterOpen={() => {
          if (refHeading.current) refHeading.current.focus();
        }}
        css={`
          [data-pka-anchor="heading"]:focus {
            ${stylers.focusRing.subtle()}
          }
        `}
      >
        <Panel.Header refHeading={refHeading}>Header</Panel.Header>
        <Panel.Content>
          <p>
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </Panel.Content>
      </Panel>
    </Story>
  );
}
