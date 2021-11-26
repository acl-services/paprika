/* eslint-disable react/no-array-index-key */
import React from "react";
import L10n from "@paprika/l10n";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import ExclamationCircle from "@paprika/icon/lib/ExclamationCircle";
import tokens from "@paprika/tokens";
import Avatar from "../../../Avatar/src";
import Tag, { Tags } from "../../src";

const handleRemove = () => action("Remove event")();

const handleClick = () => action("Click event")();

export default function Variations() {
  return (
    <L10n locale="en">
      <div style={{ padding: "20px" }}>
        <StoryHeading>Variations</StoryHeading>
        {[{ tagSize: "medium", avatarSize: "small" }, { tagSize: "large", avatarSize: "medium" }].map(permutation => (
          <Tags key={permutation.avatarSize}>
            <li>
              <Tag
                size={permutation.tagSize}
                avatar={
                  <Avatar isRound size={permutation.avatarSize}>
                    WW
                  </Avatar>
                }
              >
                {permutation.tagSize} with text Avatar
              </Tag>
            </li>
            <li>
              <Tag
                size={permutation.tagSize}
                avatar={
                  <Avatar isRound size={permutation.avatarSize}>
                    <CalendarIcon />
                  </Avatar>
                }
              >
                {permutation.tagSize} with Icon Avatar
              </Tag>
            </li>
            <li>
              <Tag size={permutation.tagSize}>{`${permutation.tagSize} just text`}</Tag>
            </li>
            <li>
              <Tag size={permutation.tagSize} onRemove={handleRemove}>
                {`${permutation.tagSize} has delete option`}
              </Tag>
            </li>
            <li>
              <Tag
                avatar={
                  <Avatar isRound size={permutation.avatarSize}>
                    <CalendarIcon />
                  </Avatar>
                }
                size={permutation.tagSize}
                onRemove={handleRemove}
                style={{ width: "120px" }}
              >
                {`${permutation.tagSize} has delete option and really long text`}
              </Tag>
            </li>
            <li>
              <Tag onClick={handleClick} size={permutation.tagSize}>
                {`${permutation.tagSize} has onClick  handler`}
              </Tag>
            </li>
            <li>
              <Tag onClick={handleClick} size={permutation.tagSize} onRemove={handleRemove}>
                {`${permutation.tagSize} has onClick  handler and delete option`}
              </Tag>
            </li>
            <li>
              <Tag onClick={handleClick} size={permutation.tagSize} onRemove={handleRemove} isDisabled>
                {`${permutation.tagSize} has onClick  handler and delete option and is disabled`}
              </Tag>
            </li>
            <li>
              <Tag
                size={permutation.tagSize}
                onRemove={handleRemove}
                theme={Tag.types.severityTheme.ALERT}
                avatar={
                  <Avatar isRound size={permutation.avatarSize} backgroundColor="none">
                    <ExclamationCircle style={{ fontSize: "24px", color: tokens.color.orangeDarken10 }} />
                  </Avatar>
                }
              >
                {`${permutation.tagSize} with alert theme`}
              </Tag>
            </li>
          </Tags>
        ))}
      </div>
      <Gap />
      <div style={{ padding: "20px" }}>
        <StoryHeading>Themes</StoryHeading>
        {[{ tagSize: "large", avatarSize: "medium" }].map((permutation, index) => (
          <Tags key={index}>
            {Object.entries(Tag.types.theme).map(theme => (
              <Tag
                as="li"
                key={theme[1]}
                theme={theme[1]}
                size={permutation.tagSize}
                avatar={
                  <Avatar isRound size={permutation.avatarSize}>
                    <CalendarIcon />
                  </Avatar>
                }
              >
                {permutation.tagSize} with text Avatar
              </Tag>
            ))}
          </Tags>
        ))}
      </div>
      <Gap />
      <div style={{ padding: "20px" }}>
        <StoryHeading>Severity Themes</StoryHeading>
        {[{ tagSize: "large", avatarSize: "medium" }].map((permutation, index) => (
          <Tags key={index}>
            {Object.entries(Tag.types.severityTheme).map(theme => (
              <Tag
                as="li"
                key={theme[1]}
                theme={theme[1]}
                size={permutation.tagSize}
                avatar={
                  <Avatar isRound size={permutation.avatarSize}>
                    <CalendarIcon />
                  </Avatar>
                }
              >
                {permutation.tagSize} with text Avatar
              </Tag>
            ))}
          </Tags>
        ))}
      </div>
    </L10n>
  );
}
