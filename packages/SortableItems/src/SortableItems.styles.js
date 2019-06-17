// import tokens from "@paprika/tokens";
// import stylers from "@paprika/stylers";

const sortableItemsStyles = props => `
  &, * {
    box-sizing: border-box;
  }
  border: 3px solid #999;
  ${props.isDraggingOver ? "padding-bottom: 42px;" : null}
`;

export default sortableItemsStyles;
