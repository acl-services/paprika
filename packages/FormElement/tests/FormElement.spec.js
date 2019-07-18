import React from "react";
import { render, configure } from "react-testing-library";
import L10n from "@paprika/l10n";
import FormElement from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

const defaultLabel = "Form Element";

function renderComponent(props = {}) {
  const { children, label, ...moreProps } = props;
  return render(
    <L10n>
      <FormElement label={label || defaultLabel} {...moreProps}>
        {children || <input data-qa-anchor="formElement.input" />}
      </FormElement>
    </L10n>
  );
}

describe("FormElement", () => {
  it("renders default props", () => {
    const { getByTestId, queryByTestId } = renderComponent();

    expect(getByTestId("formElement.label")).toHaveTextContent(defaultLabel);
    expect(getByTestId("formElement.input")).toBeInTheDocument();
    expect(getByTestId("formElement.input")).not.toHaveAttribute("disabled");
    expect(getByTestId("formElement.input")).not.toHaveAttribute("readonly");
    expect(queryByTestId("formElement.description")).not.toBeInTheDocument();
    expect(queryByTestId("formElement.error")).not.toBeInTheDocument();
    expect(queryByTestId("formElement.hint")).not.toBeInTheDocument();
  });

  it("renders id", () => {
    const { getByTestId } = renderComponent({ id: "test-id" });

    expect(getByTestId("formElement.input").id).toEqual("test-id");
    expect(getByTestId("formElement.label")).toHaveAttribute("for", "test-id");
  });

  it("renders isOptional and isRequired prop", () => {
    const { getByTestId } = renderComponent({ isOptional: true, isRequired: true });

    expect(getByTestId("formElement.label")).toHaveTextContent(/optional/i);
    expect(getByTestId("formElement.label")).toHaveTextContent(/required/i);
  });

  it("passes disabled readonly props to child", () => {
    const { getByTestId } = renderComponent({ isDisabled: true, isReadOnly: true });

    expect(getByTestId("formElement.input")).toHaveAttribute("disabled");
    expect(getByTestId("formElement.input")).toHaveAttribute("readonly");
  });

  it("renders hint and description", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <input data-qa-anchor="formElement.input" />
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Hint>Sample hint</FormElement.Hint>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("formElement.description")).toHaveTextContent(/sample description/i);
    expect(getByTestId("formElement.hint")).toBeInTheDocument();
  });

  it("renders error", () => {
    const { getByTestId, queryByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <input data-qa-anchor="formElement.input" />
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Error>Sample error</FormElement.Error>
        </FormElement>
      </L10n>
    );

    expect(queryByTestId("formElement.description")).not.toBeInTheDocument();
    expect(getByTestId("formElement.error")).toHaveTextContent(/sample error/i);
  });
});
