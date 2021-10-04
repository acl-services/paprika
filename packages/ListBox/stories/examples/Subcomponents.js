import React from "react";
import Button from "@paprika/button";
import RefreshIcon from "@paprika/icon/lib/Refresh";
import CodeViewer from "storybook/components/CodeViewer";
import StoryHeading from "storybook/components/StoryHeading";
import * as characters from "../fixtures/characters";
import { ImageOption } from "../stories.styles";
import { images } from "../fixtures/images";
import ListBox from "../../src";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

export default function SubcomponentsExample() {
  return (
    <>
      <StoryHeading level={2}>ListBox.Filter</StoryHeading>
      <CodeViewer>
        <ListBox isMulti isInline height={325}>
          <ListBox.Filter />
          {images.map(image => (
            <ListBox.Option key={image.src} label={image.label}>
              <ImageOption>
                <img alt={image.label} src={image.src} />
              </ImageOption>
            </ListBox.Option>
          ))}
        </ListBox>
      </CodeViewer>
      <StoryHeading level={2}>ListBox.Trigger</StoryHeading>
      <CodeViewer>
        <ListBox>
          <ListBox.Trigger>
            {(selected, options, { dispatch, types, refTrigger, propsForTrigger, isOpen }) => (
                <Button
                  type="button"
                  {...propsForTrigger()}
                  ref={refTrigger}
                  onClick={() => {
                    dispatch({ type: types.togglePopover });
                  }}
                >
                  {selected !== null ? options[selected].label : "Pick a superhero "}
                  {isOpen ? "close" : "open"}
                </Button>
              )}
          </ListBox.Trigger>
          {options.map(option => (
            <ListBox.Option key={option}>{option}</ListBox.Option>
          ))}
        </ListBox>
      </CodeViewer>
      <StoryHeading level={2}>ListBox.Trigger | Custom clear button</StoryHeading>
      <CodeViewer>
        <ListBox isInline>
          <ListBox.Trigger hasClearButton clearIcon={<RefreshIcon />} />
          <ListBox.Option isSelected>Loki</ListBox.Option>
          {options.map(option => (
            <ListBox.Option key={option}>{option}</ListBox.Option>
          ))}
        </ListBox>
      </CodeViewer>
      <StoryHeading level={2}>ListBox.RawItem</StoryHeading>
      <CodeViewer>
        <ListBox>
          {characters.villians}
          <ListBox.RawItem>
            <em>Show More</em>
          </ListBox.RawItem>
        </ListBox>
      </CodeViewer>
      <StoryHeading level={2}>ListBox.Box</StoryHeading>
      <CodeViewer>
        <ListBox>
          <ListBox.Box className="my-custom-className" style={{ border: "1px solid red" }} />
          {characters.antiHeroesRaw.map((item, index) => (
              <ListBox.Option key={item.label} defaultIsSelected={index === 4}>
                {item.label}
              </ListBox.Option>
            ))}
        </ListBox>
      </CodeViewer>
    </>
  );
}
