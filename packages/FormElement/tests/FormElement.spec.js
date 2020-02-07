import React from "react";
import { render, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import FormElement from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const defaultLabel = "Form Element";

function renderComponent(props = {}) {
  const { children, label, isDisabled, isReadOnly, ...moreProps } = props;
  return render(
    <L10n>
      <FormElement label={label || defaultLabel} {...moreProps}>
        {children || (
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input
                aria-describedby={ariaDescribedBy}
                readOnly={isReadOnly}
                disabled={isDisabled}
                data-pka-anchor="form-element.input"
                id={idForLabel}
              />
            )}
          </FormElement.Content>
        )}
      </FormElement>
    </L10n>
  );
}

describe("FormElement", () => {
  it("renders default props", () => {
    const { getByTestId, queryByTestId } = renderComponent();

    expect(getByTestId("form-element.label")).toHaveTextContent(defaultLabel);
    expect(getByTestId("form-element.input")).toBeInTheDocument();
    expect(getByTestId("form-element.input")).not.toHaveAttribute("disabled");
    expect(getByTestId("form-element.input")).not.toHaveAttribute("readonly");
    expect(queryByTestId("form-element.description")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.error")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.help")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.instructions")).not.toBeInTheDocument();
  });

  it("renders id", () => {
    const { getByTestId } = renderComponent({ id: "test-id" });

    expect(getByTestId("form-element.input").id).toEqual("test-id");
    expect(getByTestId("form-element.label")).toHaveAttribute("for", "test-id");
  });

  it("renders required label if both hasRequiredLabel and hasOptionalLabel are true", () => {
    const { getByTestId } = renderComponent({ hasOptionalLabel: true, hasRequiredLabel: true });

    expect(getByTestId("form-element.label")).not.toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).toHaveTextContent(/required/i);
  });

  it("renders required label if only hasRequiredLabel is true", () => {
    const { getByTestId } = renderComponent({ hasRequiredLabel: true });

    expect(getByTestId("form-element.label")).not.toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).toHaveTextContent(/required/i);
  });

  it("renders optional label if hasOptionalLabel is true", () => {
    const { getByTestId } = renderComponent({ hasOptionalLabel: true });

    expect(getByTestId("form-element.label")).toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).not.toHaveTextContent(/required/i);
  });

  it("passes disabled readonly props to child", () => {
    const { getByTestId } = renderComponent({ isDisabled: true, isReadOnly: true });

    expect(getByTestId("form-element.input")).toHaveAttribute("disabled");
    expect(getByTestId("form-element.input")).toHaveAttribute("readonly");
  });

  it("renders help and description", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input aria-describedby={ariaDescribedBy} data-pka-anchor="form-element.input" id={idForLabel} />
            )}
          </FormElement.Content>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Help>Sample help</FormElement.Help>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("form-element.description")).toHaveTextContent(/sample description/i);
    expect(getByTestId("form-element.help")).toBeInTheDocument();
  });

  it("renders extra panel", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input aria-describedby={ariaDescribedBy} data-pka-anchor="form-element.input" id={idForLabel} />
            )}
          </FormElement.Content>
          <FormElement.Instructions>
            Instructions Panel Content Instructions Panel Content Instructions Panel Content
          </FormElement.Instructions>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Help>Sample help</FormElement.Help>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("form-element.instructions")).toHaveTextContent(
      /Instructions Panel Content Instructions Panel Content Instructions Panel Content/i
    );
  });

  it("renders error", () => {
    const { getByTestId, queryByTestId } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input aria-describedby={ariaDescribedBy} data-pka-anchor="form-element.input" id={idForLabel} />
            )}
          </FormElement.Content>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Error>Sample error</FormElement.Error>
        </FormElement>
      </L10n>
    );

    expect(queryByTestId("form-element.description")).not.toBeInTheDocument();
    expect(getByTestId("form-element.error")).toHaveTextContent(/sample error/i);
  });

  it("renders fieldset, legend and not label element", () => {
    const { container } = render(
      <L10n>
        <FormElement label={defaultLabel} hasFieldSet>
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input aria-describedby={ariaDescribedBy} data-pka-anchor="form-element.input" id={idForLabel} />
            )}
          </FormElement.Content>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Error>Sample error</FormElement.Error>
        </FormElement>
      </L10n>
    );
    expect(container.querySelector("fieldset")).toBeInTheDocument();
    expect(container.querySelector("legend")).toBeInTheDocument();
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });

  it("renders fieldset and label element", () => {
    const { container } = render(
      <L10n>
        <FormElement label={defaultLabel}>
          <FormElement.Content>
            {({ idForLabel, ariaDescribedBy }) => (
              <input aria-describedby={ariaDescribedBy} data-pka-anchor="form-element.input" id={idForLabel} />
            )}
          </FormElement.Content>
          <FormElement.Description>Sample description</FormElement.Description>
          <FormElement.Error>Sample error</FormElement.Error>
        </FormElement>
      </L10n>
    );

    expect(container.querySelector("fieldset")).not.toBeInTheDocument();
    expect(container.querySelector("legend")).not.toBeInTheDocument();
    expect(container.querySelector("label")).toBeInTheDocument();
  });
});
