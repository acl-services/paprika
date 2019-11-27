import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Takeover from "@paprika/takeover";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

export default function ExampleStory() {
  const [isOpen, setIsOpen] = React.useState(true);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Story>
      <a href="/iframe.html?id=popover-dev--testing-focus-management-in-takeover&viewMode=story" target="_blank">
        View in iframe
      </a>
      <p>
        Praesent at ante in eros rutrum aliquet. Maecenas sagittis iaculis erat, vitae vulputate sem tempus tincidunt.
        In ullamcorper rhoncus nulla, non finibus augue fermentum id. Nam sit amet urna sapien. Donec ullamcorper,
        libero vel viverra porttitor, dui ipsum viverra urna, eu maximus dui neque quis risus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at sagittis urna, at fringilla
        orci.
      </p>
      <button type="button" onClick={handleOpen}>
        Open takeover
      </button>
      <p>
        Suspendisse blandit diam eu porta porttitor. Nulla ullamcorper lectus quam, et pulvinar nibh porta sit amet.
        Duis quis tortor dui. Fusce faucibus ultrices odio, vitae pulvinar magna tempus sit amet. Mauris lacinia gravida
        ante eget ornare. Nulla ut nibh diam. Aenean vulputate nunc tincidunt dictum consequat. Morbi imperdiet, ipsum
        at fermentum placerat, nunc diam interdum massa, et euismod nisl sem sit amet dolor. Nulla finibus lorem vel
        vestibulum rhoncus.
      </p>

      <Takeover isOpen={isOpen} onClose={handleClose}>
        <Takeover.Header hasCloseButton>Takeover heading</Takeover.Header>
        <Takeover.Content>
          <p>
            Below is the popover trigger; click on it to open the popover. The other focusable elements on the page are
            to test where focus goes when using the keyboard.
          </p>
          <p>
            Popover with no focusable elements:&nbsp;
            <Popover>
              <Popover.Trigger>
                <InfoIcon />
              </Popover.Trigger>
              <Popover.Content>
                <Popover.Card>Peek-a-boo!</Popover.Card>
              </Popover.Content>
              <Popover.Tip />
            </Popover>
          </p>
          <p>
            Donec et ante tristique elit sodales euismod nec id <a href="http://www.google.ca">sollicitudin</a>. Morbi
            vehicula ex nec vestibulum consectetur. Suspendisse malesuada, purus nec finibus imperdiet, turpis nisi
            varius urna, in venenatis justo lorem quis neque. Morbi magna magna, porttitor non orci quis, ornare
            vestibulum lacus. Vivamus mollis risus nulla, vitae facilisis erat varius vel.
          </p>
          <p>
            Popover with focusable elements:&nbsp;
            <Popover>
              <Popover.Trigger>
                <InfoIcon />
              </Popover.Trigger>
              <Popover.Content>
                <Popover.Card>
                  <p>
                    Pellentesque ullamcorper sem eget tincidunt consequat. <a href="http://www.google.ca">Phasellus</a>{" "}
                    nec tincidunt lacus. Mauris gravida <a href="http://www.google.ca">porttitor urna</a>, ornare
                    laoreet nulla vehicula vitae. Aenean nunc eros, vulputate at nulla ut, imperdiet rhoncus enim.
                  </p>
                </Popover.Card>
              </Popover.Content>
              <Popover.Tip />
            </Popover>
          </p>

          <button type="button">Hello</button>
          <p>
            In hendrerit purus sapien, at pharetra ipsum convallis quis. Morbi venenatis mauris sapien, id faucibus
            ipsum gravida sit amet. Vivamus faucibus est odio. Nulla volutpat quis neque a venenatis. Maecenas gravida
            mauris at arcu <a href="http://www.google.ca">vehicula</a>, eget placerat dui finibus. Sed sed elementum
            libero, nec rutrum felis. Integer ut vulputate tortor. Praesent maximus erat quis tellus efficitur pretium.
          </p>
        </Takeover.Content>
      </Takeover>
    </Story>
  );
}

/*



        <p>

        </p>
*/
