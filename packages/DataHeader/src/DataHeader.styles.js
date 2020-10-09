import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const Header = styled.div(({ $color = tokens.color.black, $backgroundColor = "transparent", refHeader }) => {
  function resetHeaderParentContainer() {
    /**
     * This wait until the <Table /> <DataGrid /> is render and then execute the function to style the TH for the Table or the Div for the DataGrid
     * The reason to do it this wait is because the lack of a css selector that can target a parent and
     * To be able to do this via the Table and the DataGrid we will have to force the consumer to pass a prop to reset the default style
     * of the Th and Cell component which is not the most convenient way.
     * This is not hard to maintain and its easy to understand.
     */
    window.requestAnimationFrame(() => {
      const $anchor = refHeader.current;

      if ($anchor) {
        const s = $anchor.parentElement.style;
        s.backgroundColor = $backgroundColor;
        s.color = $color;
      }
    });

    // return empty string so doesn't render anything on the styled-component class
    return "";
  }

  return css`
    align-items: center;
    display: flex;
    width: 100%;
    /**
      * Css lacks of parent selector, we can use javascript to replace that :P
      */
    ${$backgroundColor || $color ? resetHeaderParentContainer() : ""}
  `;
});

export const Label = styled.div(() => {
  return css`
    flex-basis: 100%;
    flex-grow: 1;
    min-height: 24px;
  `;
});

export const Icon = styled.div(() => {
  return css`
    padding-right: ${tokens.spaceSm};
  `;
});

export const Info = styled.div(() => {
  return css`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    svg {
      font-size: 1.3rem;
    }
  `;
});
