import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Box = styled.div`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  margin-bottom: ${stylers.spacer(2)};
  padding: ${stylers.spacer(2)};
  width: 280px;
`;

export const TruncatedBox = styled(Box)`
  ${stylers.truncateText};
`;

export const UntruncatedBox = styled(TruncatedBox)`
  ${stylers.noTruncateText};
`;

export const InvisibleBox = styled(Box)`
  ${stylers.visuallyHidden};
`;

export const InputWithPlaceholder = styled.input`
  ${stylers.placeholders};
`;

export const FontScale = styled.div``;

export const FontStep = styled.span`
  ${props => stylers.fontSize(props.scale)};

  display: inline-flex;
  flex-direction: column;
  line-height: 1;

  > span {
    padding: 0 ${tokens.space};
    text-align: center;

    &:last-child {
      opacity: 0.7;
      ${stylers.fontSize(-5)};
    }
  }
`;

export const LeadingStep = styled(Box)`
  ${props => stylers.lineHeight(props.scale)}

  code {
    opacity: 0.7;
  }
`;

const zOffset = 30;

const zStyles = props => `
  left: ${zOffset * props.level}px;
  top: ${(zOffset / 4) * props.level}px;
  ${stylers.z(props.level)};
`;

export const ZBox = styled(Box)`
  height: ${stylers.spacer(15)};
  position: relative;
`;

export const ZStep = styled.span`
  position: absolute;
  width: ${stylers.spacer(6)};
  height: ${stylers.spacer(6)};
  margin: ${tokens.space} 0 0 ${tokens.space};
  background: rgba(164, 164, 164, 0.9); // TODO: need rgba mixin
  border: 1px solid ${tokens.color.blackLighten20};
  color: ${tokens.color.white};
  line-height: ${stylers.spacer(6)};
  text-align: center;

  ${zStyles}
`;

export const FocusBox = styled.div`
  background: ${tokens.color.blackLighten70};
  height: ${stylers.spacer(4)};
  width: ${stylers.spacer(4)};
`;

FocusBox.focusIndicator = styled(FocusBox)`
  &:focus,
  &:hover {
    ${stylers.focusIndicator};
  }
`;

FocusBox.insetFocusIndicator = styled(FocusBox)`
  &:focus,
  &:hover {
    ${stylers.insetFocusIndicator};
  }
`;

FocusBox.compositeFocusIndicator = styled(FocusBox)`
  border: 1px solid ${tokens.border.color};
  &:focus,
  &:hover {
    ${stylers.compositeFocusIndicator}
  }
`;

FocusBox.compositeInsetFocusIndicator = styled(FocusBox)`
  border: 1px solid ${tokens.border.color};
  &:focus,
  &:hover {
    ${stylers.compositeInsetFocusIndicator}
  }
`;

FocusBox.subtleFocusIndicator = styled(FocusBox)`
  &:focus,
  &:hover {
    ${stylers.subtleFocusIndicator};
  }
`;

FocusBox.subtleInsetFocusIndicator = styled(FocusBox)`
  &:focus,
  &:hover {
    ${stylers.subtleInsetFocusIndicator};
  }
`;
