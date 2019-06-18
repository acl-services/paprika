import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const sortableItemsStyles = props => `
  &, * {
    box-sizing: border-box;
  }
  border: 3px solid #999;
  ${props.isDraggingOver ? `padding-bottom: ${stylers.spacer(5)};` : null}
`;

export default sortableItemsStyles;

export const draggableStyles = props => `
  display: flex;
  background: #ddd;
  border: 1px solid #bbb;
  height: ${stylers.spacer(4)};
  line-height: ${Number.parseInt(tokens.space, 10) * 4 - 2}px;
  margin: 0 0 ${tokens.space} 0;
  &:last-child {
    margin-bottom: 0;
  }
  ${props.isDragging ? "border-color: #888; box-shadow: 0 2px 4px rgba(150,150,150,0.5);" : null}
`;

export const draggableIndexStyles = `
  background: #aaa;
  padding: 0 ${tokens.space};
`;

export const draggableHandleStyles = `
  background: #ccc;
  padding: 0 ${tokens.space};
  line-height: 1;
  display: flex;
  align-items: center;
  color: #888;
`;

export const draggableBodyStyles = `
  padding: 0 ${tokens.space};
`;
