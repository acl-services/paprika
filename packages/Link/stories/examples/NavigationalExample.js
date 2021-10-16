import React from "react";
import UploadIcon from "@paprika/icon/lib/Upload";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import LockIcon from "@paprika/icon/lib/Lock";
import PencilIcon from "@paprika/icon/lib/Pencil";
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
      <h3>Medium Navigation</h3>
      <MediumContainer>
        <Link href={url} isNavigation>
          <UploadIcon />
          Item One
        </Link>
        <Link href={url} isNavigation>
          <CalendarIcon />
          Item Two
        </Link>
        <Link href={url} isNavigation>
          <LockIcon />
          Item Three
        </Link>
        <Link href={url} isNavigation>
          <PencilIcon />
          Item Four
        </Link>
      </MediumContainer>
      <br />
      <h3>Small Navigation</h3>
      <SmallContainer>
        <Link href={url} isNavigation>
          <UploadIcon />
          Item One
        </Link>
        <Link href={url} isNavigation>
          <CalendarIcon />
          Item Two
        </Link>
        <Link href={url} isNavigation>
          <LockIcon />
          Item Three
        </Link>
        <Link href={url} isNavigation>
          <PencilIcon />
          Item Four
        </Link>
      </SmallContainer>
    </>
  );
}
