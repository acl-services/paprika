/* eslint-disable react/no-array-index-key */
import React from "react";
import L10n from "@paprika/l10n";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import ExclamationCircle from "@paprika/icon/lib/ExclamationCircle";
import tokens from "@paprika/tokens";
import Avatar from "../../../Avatar/src";
import Tag, { Tags } from "../../src";

const handleRemove = () => {
  console.log("remove event");
};

const handleClick = () => {
  console.log("click event");
};

export default function Variations() {
  return (
    <L10n locale="en">
      <div style={{ padding: "20px" }}>
        Variations
        {[{ tagSize: "medium", avatarSize: "small" }, { tagSize: "large", avatarSize: "medium" }].map(permutation => (
          <Tags key={permutation.avatarSize}>
            <Tag size={permutation.tagSize}>
              <Avatar isRound size={permutation.avatarSize}>
                WW
              </Avatar>
              {permutation.tagSize} with text Avatar
            </Tag>
            <Tag size={permutation.tagSize}>
              <Avatar isRound size={permutation.avatarSize}>
                <CalendarIcon />
              </Avatar>
              {permutation.tagSize} with Icon Avatar
            </Tag>
            <Tag size={permutation.tagSize}>{`${permutation.tagSize} just text`}</Tag>
            <Tag size={permutation.tagSize} onRemove={handleRemove}>
              {`${permutation.tagSize} has delete option`}
            </Tag>
            <Tag size={permutation.tagSize} onRemove={handleRemove} style={{ width: "120px" }}>
              {`${permutation.tagSize} has delete option and really long text`}
            </Tag>
            <li style={{ listStyleType: "none" }}>
              <Tag onClick={handleClick} size={permutation.tagSize}>
                {`${permutation.tagSize} has onClick  handler`}
              </Tag>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Tag onClick={handleClick} size={permutation.tagSize} onRemove={handleRemove}>
                {`${permutation.tagSize} has onClick  handler and delete option`}
              </Tag>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Tag onClick={handleClick} size={permutation.tagSize} onRemove={handleRemove} isDisabled>
                {`${permutation.tagSize} has onClick  handler and delete option and is disabled`}
              </Tag>
            </li>
            <Tag
              size={permutation.tagSize}
              onRemove={handleRemove}
              theme={Tag.types.severityTheme.ALERT}
              borderColor={tokens.color.orangeDarken10}
            >
              <Avatar isRound size={permutation.avatarSize} backgroundColor="none">
                <ExclamationCircle style={{ fontSize: "24px", color: tokens.color.orangeDarken10 }} />
              </Avatar>
              {`${permutation.tagSize} with alert theme`}
            </Tag>
            <Tag size={permutation.tagSize} onRemove={handleRemove} borderColor="green">
              {`${permutation.tagSize} with custom border`}
            </Tag>
          </Tags>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        Colours
        {[{ tagSize: "large", avatarSize: "medium" }].map((permutation, index) => (
          <Tags key={index}>
            {Object.entries(Tag.types.theme).map(theme => (
              <Tag key={theme[1]} theme={theme[1]} size={permutation.tagSize}>
                <Avatar isRound size={permutation.avatarSize}>
                  <CalendarIcon />
                </Avatar>
                {permutation.tagSize} with text Avatar
              </Tag>
            ))}
          </Tags>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        Severity Colours
        {[{ tagSize: "large", avatarSize: "medium" }].map((permutation, index) => (
          <Tags key={index}>
            {Object.entries(Tag.types.severityTheme).map(theme => (
              <Tag key={theme[1]} theme={theme[1]} size={permutation.tagSize}>
                <Avatar isRound size={permutation.avatarSize}>
                  <CalendarIcon />
                </Avatar>
                {permutation.tagSize} with text Avatar
              </Tag>
            ))}
          </Tags>
        ))}
      </div>
    </L10n>
  );
}
