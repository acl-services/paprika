import type * as React from "react";

export default Editor;

interface EditorProps {
  /** Editor.Value with the rendered value, and Editor.Edit with the editing UI. */
  children: React.ReactNode;
  /** If the children of Editor.Edit are shown instead of the value. */
  isEditing: boolean;
  /** Message shown in the tooltip of the error icon, while status is "error". */
  messageError?: React.ReactNode;
  /** Fires when the value is clicked. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Fires once the checkmark shown for the "succeed" status has finished animating. */
  onSuccessAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
  /** Value shown in place of Editor.Value while status is "loading". */
  optimisticValue?: React.ReactNode;
  /** State of the value being edited. */
  status?: "error" | "idle" | "loading" | "succeed";
}

declare const Editor: React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<HTMLButtonElement>> & {
  /** Wraps the value shown when not editing. */
  Value: React.FC<{ children?: React.ReactNode }>;
  /** Wraps the editing UI shown while isEditing. */
  Edit: React.FC<{ children?: React.ReactNode }>;
  types: {
    status: {
      ERROR: "error";
      IDLE: "idle";
      LOADING: "loading";
      SUCCEED: "succeed";
    };
  };
};
