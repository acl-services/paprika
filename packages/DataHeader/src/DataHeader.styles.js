import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Header = styled.div(({ $color, $backgroundColor, refHeader }) => {
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
        if ($backgroundColor !== null) s.backgroundColor = $backgroundColor;
        if ($color !== null) s.color = $color;
      }
    });

    // return empty string so doesn't render anything on the styled-component class
    return "";
  }

  return css`
    align-items: center;
    display: flex;
    overflow: hidden;
    width: 100%;
    /**
      * Css lacks of parent selector, we can use javascript to replace that :P
      */
    ${$backgroundColor || $color ? resetHeaderParentContainer() : ""}

    [data-pka-anchor="raw-button"] {
      border-radius: ${tokens.button.borderRadius};
      padding: 1px 2px;

      &:focus {
        box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
      }
    }
  `;
});

export const Label = styled.div(
  () => css`
    ${stylers.truncateText}
    flex-basis: 100%;
    flex-grow: 1;
  `
);

export const Icon = styled.div(
  () => css`
    color: ${tokens.color.blackLighten20};
    padding-right: ${tokens.spaceSm};
  `
);

export const Info = styled.div(
  () => css`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    min-width: 0;

    svg {
      font-size: 1.2rem;
    }

    & + [data-pka-anchor="popover"] {
      display: block;
    }
  `
);
