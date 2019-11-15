import React from "react";
import { render, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import FormElement from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const defaultLabel = "Form Element";

function renderComponent(props = {}) {
  const { children, label, ...moreProps } = props;
  return render(
    <L10n>
      <FormElement label={label || defaultLabel} {...moreProps}>
        {children || <input data-pka-anchor="formElement.input" />}
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
    expect(queryByTestId("formElement.help")).not.toBeInTheDocument();
    expect(queryByTestId("formElement.instructions")).not.toBeInTheDocument();
  });

  it("renders id", () => {
    const { getByTestId } = renderComponent({ id: "test-id" });

    expect(getByTestId("formElement.input").id).toEqual("test-id");
    expect(getByTestId("formElement.label")).toHaveAttribute("for", "test-id");
  });

  it("renders hasOptionalLabel and hasRequiredLabel prop", () => {
    const { getByTestId } = renderComponent({ hasOptionalLabel: true, hasRequiredLabel: true });

    expect(getByTestId("formElement.label")).toHaveTextContent(/optional/i);
    expect(getByTestId("formElement.label")).toHaveTextContent(/required/i);
  });

  it("passes disabled readonly props to child", () => {
    const { getByTestId } = renderComponent({ isDisabled: true, isReadOnly: true });

    expect(getByTestId("formElement.input")).toHaveAttribute("disabled");
    expect(getByTestId("formElement.input")).toHaveAttribute("readonly");
  });

  it("renders help and description", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <input data-pka-anchor="formElement.input" />
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Help>Sample help</FormElement.Help>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("formElement.description")).toHaveTextContent(/sample description/i);
    expect(getByTestId("formElement.help")).toBeInTheDocument();
  });

  it("renders extra panel", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <input data-pka-anchor="formElement.input" />
          <FormElement.Instructions>
            Instructions Panel Content Instructions Panel Content Instructions Panel Content
          </FormElement.Instructions>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Help>Sample help</FormElement.Help>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("formElement.instructions")).toHaveTextContent(
      /Instructions Panel Content Instructions Panel Content Instructions Panel Content/i
    );
  });

  it("renders error", () => {
    const { getByTestId, queryByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <input data-pka-anchor="formElement.input" />
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Error>Sample error</FormElement.Error>
        </FormElement>
      </L10n>
    );

    expect(queryByTestId("formElement.description")).not.toBeInTheDocument();
    expect(getByTestId("formElement.error")).toHaveTextContent(/sample error/i);
  });
});
