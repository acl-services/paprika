import React from "react";
import { Upload as UploadIcon, Calendar as CalendarIcon, Lock as LockIcon, Pencil as PencilIcon } from "@paprika/icon";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Link from "../../src";

export default function MenuExample(): JSX.Element {
  const url = "http://www.wegalvanize.com";

  const MediumContainer = styled.div`
    max-width: 300px;

    a {
      height: calc(5 * ${tokens.space});
    }

    svg {
      ${stylers.fontSize(2)}
      margin-right: ${tokens.spaceLg};
    }
  `;

  const SmallContainer = styled.div`
    max-width: 200px;
    ${stylers.fontSize(-1)}

    a {
      height: calc(4 * ${tokens.space});
    }

    svg {

      ${stylers.fontSize(0)}
      margin-right: ${tokens.spaceSm};
    }
  `;

  return (
    <>
      <h3>Medium Menu</h3>
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
      <h3>Small Menu</h3>
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
