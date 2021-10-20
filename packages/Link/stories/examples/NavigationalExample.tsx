import React from "react";
import { Upload as UploadIcon, Calendar as CalendarIcon, Lock as LockIcon, Pencil as PencilIcon } from "@paprika/icon";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Link from "../../src";
// import { Story, CenteredStory, Rule, Big, Small, Tagline, Gap, repeat, breaklines, CodeHeading } from "storybook/assets/styles/common.styles";

export default function NavigationalExampleExample() {
  const url = "http://www.wegalvanize.com";

  const MediumContainer = styled.div`
    max-width: 300px;

    a {
      height: calc(10 * ${tokens.spaceSm});
    }

    svg {
      ${stylers.fontSize(2)}
      margin-right: calc(3 * ${tokens.spaceSm});
    }
  `;

  const SmallContainer = styled.div`
    max-width: 200px;
    ${stylers.fontSize(-1)}

    a {
      height: calc(8 * ${tokens.spaceSm});
    }

    svg {

      ${stylers.fontSize(0)}
      margin-right: ${tokens.spaceSm};
    }
  `;

  return (
    <>
      <h3>Medium Navigation (Menu)</h3>
      <MediumContainer>
        <Link href={url} isMenu>
          <UploadIcon />
          Item One
        </Link>
        <Link href={url} isMenu>
          <CalendarIcon />
          Item Two
        </Link>
        <Link href={url} isMenu>
          <LockIcon />
          Item Three
        </Link>
        <Link href={url} isMenu>
          <PencilIcon />
          Item Four
        </Link>
      </MediumContainer>
      <br />
      <h3>Small Navigation (Menu)</h3>
      <SmallContainer>
        <Link href={url} isMenu>
          <UploadIcon />
          Item One
        </Link>
        <Link href={url} isMenu>
          <CalendarIcon />
          Item Two
        </Link>
        <Link href={url} isMenu>
          <LockIcon />
          Item Three
        </Link>
        <Link href={url} isMenu>
          <PencilIcon />
          Item Four
        </Link>
      </SmallContainer>
    </>
  );
}
